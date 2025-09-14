import React, { useState, useEffect, useRef } from 'react';

// This is a simple counter to ensure each ID is unique within the application's runtime.
let globalIdCounter = 0;

function useUId() {
    // Use a ref to store the generated ID. This ensures the ID is stable
    // and doesn't change on re-renders.
    const idRef = useRef(null);

    // Use a useEffect hook to generate the ID on the first render.
    // We check if idRef.current is null to only run this once.
    useEffect(() => {
        if (idRef.current === null) {
            // Generate a unique ID using a prefix and the global counter.
            idRef.current = `unique-id-${globalIdCounter++}`;
        }
    }, []);

    // Return the stable ID from the ref.
    return idRef.current;
}

export default useUId;