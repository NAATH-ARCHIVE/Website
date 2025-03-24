import { MongoClient } from 'mongodb';

const uri = import.meta.env.VITE_MONGODB_URI;
const client = new MongoClient(uri);

export async function connectToMongoDB() {
  try {
    await client.connect();
    return client.db('naath-archive');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export async function addToWaitingList(name, email) {
  const db = await connectToMongoDB();
  const waitingList = db.collection('waiting-list');
  
  try {
    const result = await waitingList.insertOne({
      name,
      email,
      createdAt: new Date()
    });
    return result;
  } catch (error) {
    if (error.code === 11000) {
      throw new Error('Email already registered');
    }
    throw error;
  } finally {
    await client.close();
  }
}