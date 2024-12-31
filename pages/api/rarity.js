import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { itemId } = req.query;

    if (!itemId) {
        return res.status(400).json({ error: 'Missing itemId' });
    }

    try {
        const response = await fetch(`https://api.roblox.com/marketplace/item/details?itemId=${itemId}`);
        const data = await response.json();

        if (response.status !== 200 || !data) {
            return res.status(500).json({ error: 'Error fetching item details' });
        }

        const itemName = data.name;
        const rarityRank = calculateRarityRank(data);

        res.status(200).json({
            itemId,
            itemName,
            rarityRank
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error fetching item details' });
    }
}

function calculateRarityRank(itemData) {
    const { price, sales, limited } = itemData;
    if (limited) {
        if (sales < 100) {
            return 1;
        } else if (sales < 500) {
            return 2;
        } else {
            return 3;
        }
    }
    return 4;
}
