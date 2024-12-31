import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ error: 'Missing userId' });
    }

    try {
        const response = await fetch(`https://groups.roblox.com/v1/users/${userId}/groups/roles`);
        const data = await response.json();

        if (response.status !== 200 || !data.data) {
            return res.status(500).json({ error: 'Error' });
        }

        const groups = data.data.map(group => ({
            name: group.group.name,
            id: group.group.id,
            role: group.role.name,
            joined: group.roleMembership.created || 'Unknown',
        }));

        res.status(200).json({ groups });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error' });
    }
}
