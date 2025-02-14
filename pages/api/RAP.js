import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ error: 'Missing userId' });
    }

    try {
        const userItemsResponse = await fetch(`https://inventory.roblox.com/v1/users/${userId}/assets/collectibles`);
        const userItemsData = await userItemsResponse.json();

        if (userItemsResponse.status !== 200) {
            return res.status(500).json({ error: 'Error fetching items' });
        }

        let rap = 0;
        let validItemCount = 0;

        for (const item of userItemsData.data) {
            if (item.isLimited || item.isLimitedUnique) {
                const itemDetailsResponse = await fetch(`https://catalog.roblox.com/v1/items/${item.id}/details`);
                const itemDetailsData = await itemDetailsResponse.json();

                if (itemDetailsResponse.status === 200 && itemDetailsData.price) {
                    rap += itemDetailsData.price;
                    validItemCount++;
                }
            }
        }

        if (validItemCount === 0) {
            return res.status(404).json({ error: 'No valid items with RAP found' });
        }

        const formattedRAP = rap.toLocaleString();
        res.status(200).json({ playerRAP: formattedRAP });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error' });
    }
}
