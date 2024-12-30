import fetch from 'node-fetch'

export default async function handler(req, res) {
  const { userId } = req.query
  const url = `https://inventory.roblox.com/v1/users/${userId}/assets/collectibles?limit=9999999`
  
  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data.errors && data.errors[0].code === 10) {
      res.status(200).json({ itemCount: 'Private' })
    } else {
      res.status(200).json({ itemCount: data.data.length })
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
