const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/player/:userId/items', async (req, res) => {
  const { userId } = req.params;
  try {
    const response = await axios.get(`https://inventory.roproxy.com/v1/users/${userId}/assets/collectibles`);
    const itemCount = response.data.length;
    res.json({ userId, itemCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch player data' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
