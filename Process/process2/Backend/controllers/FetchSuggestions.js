const handleSuggestions = async (req, res) => {

    const query = encodeURIComponent(keyword);
    try {

        const res = await fetch(`https://www.google.com/complete/search?q=${query}&cp=1&client=gws-wiz&xssi=t&gs_pcrt=undefined&hl=en-IN&authuser=0&psi=fNXHaIOHIPn15OUPjM2OwAE.1757926794427&dpr=1`);

        // Get raw text instead of json
        let raw = await res.text();

        console.log(extractSuggestions(raw));

    } catch (e) {
        console.error(e);
    }
}

function extractSuggestions(rawResponse) {
    // 1. Strip everything before the first [
    const clean = rawResponse.substring(rawResponse.indexOf("["));

    // 2. Parse into JSON
    const arr = JSON.parse(clean);

    // 3. Extract arr[0][i][0] for all i
    const suggestions = arr[0].map(item => item[0]);

    // 4. Remove <b> tags
    return suggestions.map(s => s.replace(/<\/?b>/g, ""));
}

export default handleSuggestions;