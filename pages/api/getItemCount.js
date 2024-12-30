import fetch from 'node-fetch'

export default async function handler(req, res) {
  const { userId } = req.query
  const url = `https://inventory.roblox.com/v1/users/${userId}/assets/collectibles?limit=9999999`

  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      const errorMessage = await response.text()
      console.error('Error response from API:', errorMessage)
      return res.status(response.status).json({ error: 'Failed to fetch data' })
    }

    const data = await response.json()

    if (data.errors && data.errors[0].code === 10) {
      return res.status(200).json({ itemCount: 'Private' })
    }

    res.status(200).json({ itemCount: data.data.length })
  } catch (error) {
    console.error('Error during fetch:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
