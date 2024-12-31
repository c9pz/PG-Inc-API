export default async function handler(req, res) {
    const { text } = req.query;

    if (!text) {
        return res.status(400).json({ error: 'Missing text' });
    }

    try {
        const cleanedText = text.replace(/\d+/g, '');

        res.status(200).json({
            cleanedText
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error processing text' });
    }
}
