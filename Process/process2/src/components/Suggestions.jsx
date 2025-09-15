const Suggestions = ({ suggestionsData }) => {
    const list = Array.isArray(suggestionsData) ? suggestionsData : (suggestionsData?.suggestions ?? []);

    return (
        <div className="flex flex-col gap-2">
            {list.length === 0 ? (
                null
            ) : (
                list.map((v, i) => (
                    <div className="text-white flex gap-2 p-1 items-center" key={i}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                        {v}
                    </div>
                ))
            )}
        </div>
    );
}

export default Suggestions;