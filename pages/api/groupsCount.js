import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { userId } = req.query;

    try {
        const response = await fetch(`https://groups.roblox.com/v1/users/${userId}/groups/roles`);
        const data = await response.json();

        if (response.status !== 200) {
            res.status(500).json({ error: 'Failed to fetch data from Roblox' });
            return;
        }

        const groupsCount = data.data.length;

        res.status(200).json({ groupsCount });

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
