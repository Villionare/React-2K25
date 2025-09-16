const fetchSuggestions = async (keyword) => {
    if (!keyword) return []; // Early return for empty input

    const query = encodeURIComponent(keyword);

    try {
        const res = await fetch(`http://localhost:3000/api/search?q=${query}`);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const suggestions = await res.json();

        console.log('Suggestions:', suggestions); // Debug the response

        return suggestions; // Expecting ["test", "testosterone", ...]

    } catch (error) {
        console.error('Error fetching suggestions:', error.message);
        return [];
    }
};

export default fetchSuggestions;