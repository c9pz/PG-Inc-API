import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ error: 'Missing userId' });
    }

    try {
        let totalRAP = 0;
        let cursor = '';
        const limit = 100;

        while (true) {
            const response = await fetch(`https://inventory.roblox.com/v1/users/${userId}/assets/collectibles?limit=${limit}&cursor=${cursor}`);
            const data = await response.json();

            if (response.status !== 200) {
                console.error('Error fetching data:', data);
                return res.status(500).json({ error: 'Error' });
            }

            if (!data.data || data.data.length === 0) break;

            totalRAP += data.data.reduce((acc, item) => acc + (item.recentAveragePrice || 0), 0);

            if (!data.nextPageCursor) break;

            cursor = data.nextPageCursor;
        }

        const formattedRAP = totalRAP.toLocaleString();

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        res.status(200).json({ playerRAP: formattedRAP });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error' });
    }
}
