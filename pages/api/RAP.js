import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { userId } = req.query;

    if (!userId) {
        res.status(400).json({ error: 'UserId is required' });
        return;
    }

    try {
        const response = await fetch(`https://inventory.roblox.com/v1/users/${userId}/assets/collectibles?limit=100`);
        const data = await response.json();

        if (response.status !== 200 || !data.data) {
            res.status(500).json({ error: 'Failed' });
            return;
        }

        let totalRAP = 0;

        for (const item of data.data) {
            if (item.recentAveragePrice) {
                totalRAP += item.recentAveragePrice;
            }
        }

        res.status(200).json({ playerRAP: totalRAP });

    } catch (error) {
        console.error('Error fetching RAP:', error);
        res.status(500).json({ error: 'Error' });
    }
}
