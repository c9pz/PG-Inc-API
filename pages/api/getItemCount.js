// pages/api/getItemCount.js

export default async function handler(req, res) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: 'UserId is required' });
  }

  try {
    // Example logic to fetch user item count (you need to replace this with actual API calls)
    const response = await fetch(`https://some-roblox-api.com/user/${userId}/inventory`);
    const data = await response.json();

    if (!data || data.error) {
      return res.status(404).json({ error: 'User not found or invalid response' });
    }

    // Assuming the API returns an item count field
    const itemCount = data.itemCount;

    res.status(200).json({ itemCount });
  } catch (error) {
    console.error('Error fetching item count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
