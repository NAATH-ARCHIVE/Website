export async function addToWaitingList(name, email) {
  const response = await fetch('http://localhost:5173/api/waiting-list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || 'Something went wrong');
  }

  return response.json();
}