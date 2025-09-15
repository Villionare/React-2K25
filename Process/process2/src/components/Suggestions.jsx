const Suggestions = ({ suggestionsData }) => {
    const list = Array.isArray(suggestionsData) ? suggestionsData : (suggestionsData?.suggestions ?? []);

    return (
        <div className="flex flex-col">
            {list.length === 0 ? (
                <div className="text-gray-400">No suggestions</div>
            ) : (
                list.map((v, i) => (
                    <div className="text-white" key={i}>
                        {v}
                    </div>
                ))
            )}
        </div>
    );
}

export default Suggestions;