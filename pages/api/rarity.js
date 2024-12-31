import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { itemId } = req.query;

    if (!itemId) {
        return res.status(400).json({ error: 'Missing itemId' });
    }

    try {
        const response = await fetch(`https://api.roblox.com/marketplace/productinfo?assetId=${itemId}`);
        const data = await response.json();

        if (response.status !== 200 || !data) {
            return res.status(500).json({ error: 'Error fetching item details' });
        }

        const itemName = data.Name;
        const isLimited = data.IsLimited;
        const price = data.PriceInRobux;

        let rarityRank = "Unknown";

        if (isLimited) {
            rarityRank = "Limited";
        } else if (price >= 5000) {
            rarityRank = "Epic";
        } else if (price >= 1000) {
            rarityRank = "Rare";
        } else if (price >= 100) {
            rarityRank = "Uncommon";
        } else {
            rarityRank = "Common";
        }

        res.status(200).json({
            itemId,
            itemName,
            rarityRank,
            price
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error fetching item details' });
    }
}
