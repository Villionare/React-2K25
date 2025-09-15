import { useState } from "react";

const Count = ({ value, updater }) => {
    console.log('updater has been called for' + value);
    return <>
        <p className="text-white">
            {value}
        </p>
        <button className="bg-amber-300 text-black" onClick={() => updater((prev) => ++prev)}>
            count1
        </button>
    </>;
}

export default Count;