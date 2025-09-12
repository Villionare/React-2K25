import { useEffect } from "react";

const fetchSuggestions = async (keyword) => {

    const searchQ = encodeURIComponent(keyword);
    const googleUrl = `https://www.google.com/complete/search?q=${searchQ}&cp=23&client=gws-wiz&xssi=t&gs_pcrt=undefined&hl=en-IN&authuser=0&psi=2QXEaN7JBIv2seMP8e306Ao.1757677026674&dpr=1&gs_mss=asdfkj`;
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(googleUrl)}`;

    const ress = fetch(proxyUrl)
        .then(response => response.text())  // Get as text to handle prefix
        .then(text => {
            const processed = processApiData(text);
            return processed;
        });

    console.log(ress);
    // try {

    //     const responce = await fetch(`http://google.com/complete/search?output=toolbar&q=${searchQ}`);

    //     if (!responce.ok) {
    //         throw new Error('Some error from Google server in getting suggestions');
    //     }

    //     const resData = await responce.json();

    //     console.log(resData);

    //     // console.log(searchQ);

    // } catch (e) {
    //     console.error('Some error from the CodeBase: ' + e);
    // }

    // return null
}

function processApiData(apiResponse) {
    // If it's a string response, remove the JSONP prefix )]}' and parse it
    let data;
    if (typeof apiResponse === 'string') {
        // Remove the prefix )]}' - it's 4 characters: ')', ']', '}', '\''
        const cleaned = apiResponse.slice(4);
        data = JSON.parse(cleaned);
    } else {
        // Assume it's already parsed data
        data = apiResponse;
    }

    // Extract the first array containing the relevant data items
    const items = data[0];

    // Map through the items to extract the first element (the string with HTML formatting)
    // JSON.parse automatically handles \u003c to < etc., so the strings are ready with HTML tags
    const processedData = items.map(item => item[0]);

    console.log(processedData);

    return processedData;
}


export default fetchSuggestions;

// const fetchSuggestions = async (keyword) => {
//     try {
//         const searchQ = encodeURIComponent(keyword);
//         const googleUrl = `https://www.google.com/complete/search?q=${searchQ}&cp=23&client=gws-wiz&xssi=t&gs_pcrt=undefined&hl=en-IN&authuser=0&psi=2QXEaN7JBIv2seMP8e306Ao.1757677026674&dpr=1&gs_mss=asdfkj`;
//         const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(googleUrl)}`;

//         const response = await fetch(proxyUrl, { method: 'GET' });

//         if (!response.ok) {
//             throw new Error('Some error from Google server in getting suggestions');
//         }

//         const res = await response.text();
//         console.log(res); // For debugging the raw response

//         // Strip the Google-specific prefix (e.g., )]}' ) from the response
//         const jsonText = res.replace(("/^)\]}\'\,\'\)/"), '');

//         let resData;
//         try {
//             resData = JSON.parse(jsonText);
//         } catch (parseError) {
//             console.error('Invalid JSON response (likely HTML error page):', jsonText.substring(0, 200));
//             return null;
//         }

//         // Extract and purify suggestions: resData[0] is the array of [html_suggestion, ...]
//         // Strip HTML tags (e.g., <b> and </b>) from each suggestion string
//         const suggestions = resData[0].map(item => {
//             if (Array.isArray(item) && typeof item[0] === 'string') {
//                 // Remove all HTML tags with regex
//                 return item[0].replace(("/<[^>]*>/g"), '');
//             }
//             return ''; // Fallback for invalid items
//         }).filter(sug => sug.length > 0); // Remove empty ones

//         return suggestions;

//     } catch (e) {
//         console.error('Some error from the CodeBase: ' + e);
//         return null;
//     }
// };

// export default fetchSuggestions;