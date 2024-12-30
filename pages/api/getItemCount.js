export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: 'User ID is required.' });
    }

    try {
      const response = await fetch(`https://api.roblox.com/v1/users/${userId}/assets/collectibles`);
      
      if (!response.ok) {
        return res.status(response.status).json({ message: 'Failed to fetch inventory data.' });
      }

      const data = await response.json();

      if (data && data.data) {
        return res.status(200).json({
          userId: userId,
          itemCount: data.data.length, 
        });
      } else {
        return res.status(404).json({ message: 'No items found for this user.' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
