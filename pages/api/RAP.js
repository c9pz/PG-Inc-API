import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ error: 'Missing userId' });
    }

    try {
        const friendsResponse = await fetch(`https://friends.roblox.com/v1/users/${userId}/friends`);
        const groupsResponse = await fetch(`https://groups.roblox.com/v1/users/${userId}/groups/roles`);

        const friendsData = await friendsResponse.json();
        const groupsData = await groupsResponse.json();

        if (friendsResponse.status !== 200 || groupsResponse.status !== 200) {
            res.status(500).json({ error: 'Error' });
            return;
        }

        const friendsCount = friendsData.data.length;
        const groupsCount = groupsData.data.length;

        res.status(200).json({ friendsCount, groupsCount });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error' });
    }
}
