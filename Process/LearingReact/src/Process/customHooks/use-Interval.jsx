import { useEffect, useRef } from 'react';

function useInterval(callback, delay) {
    // We use a ref to store the latest callback function. This avoids
    // re-creating the interval every time the callback changes, which can
    // lead to performance issues or unexpected behavior.
    const savedCallback = useRef(callback);

    // Effect to update the savedCallback ref whenever the callback changes.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Main effect to set up and clean up the interval.
    useEffect(() => {
        // Check if the delay is a valid number.
        if (typeof delay === 'number' && delay >= 0) {
            // Create a function that calls the current callback in the ref.
            const tick = () => {
                savedCallback.current();
            };

            // Set up the interval.
            const intervalId = setInterval(tick, delay);

            // Return a cleanup function that will be called when the component
            // unmounts or when the dependencies (delay) change. This prevents memory leaks.
            return () => clearInterval(intervalId);
        }
    }, [delay]);
}

export default useInterval;
