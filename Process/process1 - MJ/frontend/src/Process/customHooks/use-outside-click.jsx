// import { useEffect} from "react";

// const useOutsideClick = (callback, ref) => {

//     useEffect(() => {
//         window.addEventListener('click', (e) => {
//             if (ref.current.contains(e.target)) {
//                 return;
//             } else {
//                 callback();
//             }
//         });

//         return () => {
//             window.removeEventListener('click');
//         }
//     }, [window]);
// }

// export default useOutsideClick;

import React, { useState, useEffect, useRef, useMemo } from 'react';

/**
 * A custom hook to detect clicks outside of a specific component.
 * @param {Function} callback - The function to call when an outside click is detected.
 * @param {Object} ref - A React ref object to the component you want to monitor.
 */
export function useOutsideClick(ref, callback) {
    useEffect(() => {
        /**
         * The event handler function that checks for outside clicks.
         * We define it here so we have a named reference to pass to removeEventListener.
         */
        const handleClickOutside = (event) => {
            // Check if the ref exists and if the click happened outside the referenced element.
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        // Attach the event listener to the document on component mount.
        // Using 'mousedown' can sometimes be better for performance, but 'click' is also common.
        document.addEventListener("mousedown", handleClickOutside);

        // This is the cleanup function that runs when the component unmounts.
        // It removes the event listener to prevent memory leaks.
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]); // Dependencies: The effect will re-run if the ref or callback change.
}