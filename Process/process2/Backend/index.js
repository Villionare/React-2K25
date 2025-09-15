import express from 'express';
import cors from 'cors';

const app = express();

// Allow CORS only for your frontend origin
app.use(cors({
    origin: 'http://localhost:5556' // Restrict to your frontend
}));
app.use(express.json());

app.get('/api/search', async (req, res) => {
    const query = req.query.q || '';

    if (!query) {
        return res.status(400).json({ error: 'Missing query parameter q' });
    }

    try {
        // Use native fetch or node-fetch
        let fetchFn = globalThis.fetch;
        if (!fetchFn) {
            const { default: fetch } = await import('node-fetch');
            fetchFn = fetch;
        }

        const url = `https://www.google.com/complete/search?q=${encodeURIComponent(query)}&client=gws-wiz&xssi=t`;
        const response = await fetchFn(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        console.log('Raw Google response:', text.substring(0, 100)); // Log first 100 chars for debugging

        // Remove JSONP prefix ()]}')
        const cleanText = text.replace(/^\)\]\}'\n/, '');

        // Parse JSON
        let data;
        try {
            data = JSON.parse(cleanText);
        } catch (parseError) {
            console.error('JSON parse error:', parseError.message);
            throw new Error('Invalid JSON response from Google');
        }

        console.log('Parsed data:', data); // Log parsed data for debugging

        // Extract suggestions (adjust based on response structure)
        const suggestions = (data[0] || []).map(item =>
            item[0].replace(/<[^>]+>/g, '').trim() // Strip HTML tags
        ).filter(s => s);

        res.json(suggestions);
    } catch (error) {
        console.error('Error fetching suggestions:', error.message);
        res.status(500).json({ error: 'Failed to fetch suggestions' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));