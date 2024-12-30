const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/getItemCount', async (req, res) => {
    const userId = req.query.userId;

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    try {
        const response = await axios.get(`https://api.robloxsdk.com/players/${userId}/inventory`);
        const itemCount = response.data.items.length;

        res.json({ userId, itemCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from Roblox API' });
    }
});

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
