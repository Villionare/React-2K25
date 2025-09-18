const Suggestions = ({ suggestionsData, handleSearchBoxOutsideClick }) => {
    const list = Array.isArray(suggestionsData) ? suggestionsData : (suggestionsData?.suggestions ?? []);

    const searchHistory = [
        "when will be the next election in india",
        "jobs near me",
        "java 25",
        "ggsipu",
        "omegle",
        "athena hacker house",
        "delhi metro route",
        "kotlin",
        "prisha tuition laxmi nagar",
        "what a computer operator do"
    ];

    const ClickedSuggestion = (v) => {
        // Remove all HTML tags if present
        const cleanText = v.replace(/<[^>]+>/g, "");

        // Encode for URL
        const keyword = encodeURIComponent(cleanText.trim());

        // Open Google search
        window.open(`https://www.google.com/search?q=${keyword}`);
    };


    return (
        <div className="flex flex-col gap-2 shadow-xl rounded-4xl ">

            {
                list.length === 0 ? (

                    searchHistory.map((v, i) => (
                        <div className="flex gap-2 pt-2 pl-5 items-center text-[#52188c] dark:text-[#c58af9]  cursor-pointer" key={i} onClick={() => ClickedSuggestion(v)} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>
                            {v}
                        </div>
                    ))

                ) : (
                    list.map((v, i) => (
                        <div className="text-black dark:text-white flex gap-2 pt-2 pl-5 items-center cursor-pointer" key={i} onClick={() => ClickedSuggestion(v)}>

                            <svg focusable="false" className="w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                            </svg>
                            <span dangerouslySetInnerHTML={{ __html: v }} />
                        </div>
                    ))
                )
            }

            < div className="flex justify-center gap-3 mt-4 mb-8 text-sm text-black dark:text-[#e8eaed]" >
                <button className="bg-[#f8f9fa] dark:bg-[#3c4043] rounded-md px-3 py-2">
                    Google Search
                </button>
                <button className="bg-[#f8f9fa] dark:bg-[#3c4043] rounded-md px-3 py-2">
                    I'm Feeling Lucky
                </button>
            </div >
        </div >
    );
}

export default Suggestions;