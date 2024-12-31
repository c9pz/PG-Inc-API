import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ error: 'Missing' });
    }

    try {
        const response = await fetch(`https://groups.roblox.com/v1/users/${userId}/groups/roles`);
        if (!response.ok) {
            return res.status(response.status).json({ error: 'Fetch' });
        }

        const data = await response.json();
        if (!data.data || !Array.isArray(data.data)) {
            return res.status(500).json({ error: 'Invalid' });
        }

        const groups = data.data.map(group => ({
            name: group.group.name || 'Unknown',
            id: group.group.id || 'Unknown',
            role: group.role.name || 'Unknown',
            joined: group.roleMembership?.created || 'Unknown',
        }));

        res.status(200).json({ groups });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal' });
    }
}
