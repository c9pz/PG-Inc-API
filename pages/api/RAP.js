import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { userId } = req.query;

    try {
        let totalRAP = 0;
        let cursor = '';
        const limit = 100;

        while (true) {
            const response = await fetch(`https://inventory.roblox.com/v1/users/${userId}/assets/collectibles?limit=${limit}&cursor=${cursor}`);
            const data = await response.json();

            if (response.status !== 200) {
                res.status(500).json({ error: 'Error' });
                return;
            }

            if (!data.data || data.data.length === 0) break;

            totalRAP += data.data.reduce((acc, item) => acc + (item.recentAveragePrice || 0), 0);

            if (!data.nextPageCursor) break;

            cursor = data.nextPageCursor;
        }

        const formattedRAP = totalRAP.toLocaleString();
        res.status(200).json({ playerRAP: formattedRAP });

    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
}
