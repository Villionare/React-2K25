// Simple Vercel Serverless Function to proxy Google autocomplete suggestions
// This mirrors the existing Backend endpoint so you can deploy frontend + API on Vercel

// Use CommonJS export which Vercel Node builder supports
const fetchUrl = async (url) => {
    if (typeof fetch === 'function') return fetch(url);
    // dynamic import node-fetch when fetch isn't available
    const nf = await import('node-fetch');
    return nf.default(url);
};

module.exports = async (req, res) => {
    const q = req.query.q || '';
    if (!q) return res.status(400).json({ error: 'Missing query parameter q' });

    try {
        const url = `https://www.google.com/complete/search?q=${encodeURIComponent(q)}&client=gws-wiz&xssi=t`;
        const response = await fetchUrl(url);
        if (!response.ok) return res.status(502).json({ error: 'Upstream fetch failed' });

        const text = await response.text();
        // Remove JSONP-like prefix if present
        const cleanText = text.replace(/^\)\]\}'\n/, '');

        let data;
        try {
            data = JSON.parse(cleanText);
        } catch (err) {
            console.error('parse error', err?.message);
            return res.status(502).json({ error: 'Invalid response from upstream' });
        }

        const suggestions = (data && data[0] ? data[0] : []).map(item => {
            const s = item && item[0] ? String(item[0]) : '';
            return s.replace(/<[^>]+>/g, '').trim();
        }).filter(Boolean);

        res.setHeader('Content-Type', 'application/json');
        return res.status(200).send(JSON.stringify(suggestions));
    } catch (error) {
        console.error('Error in /api/search:', error?.message || error);
        return res.status(500).json({ error: 'Failed to fetch suggestions' });
    }
};
