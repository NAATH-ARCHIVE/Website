const express = require('express');
const { createServer } = require('vite');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5173;

app.use(cors());
app.use(express.json());

const uri = process.env.VITE_MONGODB_URI;
const client = new MongoClient(uri);

app.post('/api/waiting-list', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('naath-archive');
    const waitingList = db.collection('waiting-list');
    
    const { name, email } = req.body;
    
    const result = await waitingList.insertOne({
      name,
      email,
      createdAt: new Date()
    });
    
    res.json({ success: true });
  } catch (error) {
    if (emailAlreadyExists) {
      return res.status(409).json({ message: 'Email already registered' })
    } else {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } finally {
    await client.close();
  }
});

async function startServer() {
  try {
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

    app.use(vite.middlewares);

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
}

startServer();
