// this is also called the Overlay Feature
//It's a semi-transparent layer that covers the entire screen, preventing interaction with the content underneath. 
// Clicking on this overlay typically dismisses the menu or dialog box that's currently open.

// This utility attaches a global mousedown listener that calls the provided
// callback when a click happens outside the given ref element. It returns a
// cleanup function to remove the listener.

const backDrop = (callback, ref) => {

    const outsideCheck = (event) => {
        if (!ref || !ref.current) return;
        if (!ref.current.contains(event.target)) {
            // If callback is a state setter (setTriggerSettings), call with false
            try {
                if (typeof callback === 'function') {
                    callback(false);
                }
            } catch (e) {
                // fallback: try calling without arguments
                try { callback(); } catch (err) { /* swallow */ }
            }
        }
    };

    document.addEventListener('mousedown', outsideCheck);

    // Return cleanup so callers (e.g. useEffect) can remove the listener
    return () => document.removeEventListener('mousedown', outsideCheck);
}

export default backDrop;