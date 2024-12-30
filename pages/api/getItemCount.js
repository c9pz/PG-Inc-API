import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { userId } = req.query;

    let allItems = [];
    let page = 1;
    const limit = 99999999;

    try {
        while (true) {
            const response = await fetch(`https://inventory.roblox.com/v1/users/${userId}/assets/collectibles?limit=${limit}&page=${page}`);
            const data = await response.json();

            if (data.data.length > 0) {
                allItems = [...allItems, ...data.data];
            }

            if (!data.nextPage) {
                break;
            }

            page++;
        }

        res.status(200).json({ itemCount: allItems.length });

    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ error: 'Failed to fetch inventory items' });
    }
}
