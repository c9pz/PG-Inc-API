// pages/api/getItemCount.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  // Get userId from the query parameters
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  // Set up the URL to fetch the user's inventory (collectibles)
  const url = `https://inventory.roblox.com/v1/users/${userId}/assets/collectibles?limit=10`;

  try {
    // Fetch data from Roblox inventory API
    const response = await fetch(url);
    const data = await response.json();

    // Check if there is an error in the response
    if (response.status !== 200) {
      return res.status(response.status).json({ error: data.message || 'Error fetching inventory' });
    }

    // Return the number of items in the data
    res.status(200).json({ itemCount: data.data.length });
  } catch (error) {
    console.error('Error fetching item count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
