'use client'; // ← remove if you are not using Next.js App Router

import React, { useRef, useState } from 'react';
import { FullscreenIcon } from 'lucide-react'; // optional icons

export default function FullScreenBlock() {
    const blockRef = useRef<HTMLDivElement>(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = async () => {
        if (!blockRef.current) return;

        if (!isFullScreen) {
            // ---- enter fullscreen ----
            try {
                await blockRef.current.requestFullscreen();
                setIsFullScreen(true);
            } catch (err) {
                console.error('Fullscreen request failed', err);
            }
        } else {
            // ---- exit fullscreen ----
            try {
                await document.exitFullscreen();
                setIsFullScreen(false);
            } catch (err) {
                console.error('Exit fullscreen failed', err);
            }
        }
    };

    // Listen to the native fullscreenchange event so the UI stays in sync
    // (e.g. user presses ESC to exit)
    React.useEffect(() => {
        const handler = () => {
            const nowInFS = !!document.fullscreenElement;
            setIsFullScreen(nowInFS);
        };
        document.addEventListener('fullscreenchange', handler);
        return () => document.removeEventListener('fullscreenchange', handler);
    }, []);

    return (
        <div className="p-8">
            {/* ---------- The block that will become full-screen ---------- */}
            <div
                ref={blockRef}
                className={`
          relative bg-gradient-to-br from-indigo-500 to-purple-600
          rounded-xl p-12 text-white shadow-2xl
          transition-all duration-300
          ${isFullScreen
                        ? 'fixed inset-0 z-50 rounded-none'
                        : 'max-w-2xl mx-auto'
                    }
        `}
            >
                <h1 className="text-3xl font-bold mb-4">
                    {isFullScreen ? 'Full-Screen Mode' : 'Normal Block'}
                </h1>
                <p className="mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* ---------- Toggle button ---------- */}
                <button
                    onClick={toggleFullScreen}
                    className={`
            flex items-center gap-2 px-5 py-2 rounded-lg
            bg-white/20 hover:bg-white/30 backdrop-blur-sm
            transition-colors
          `}
                >
                    {isFullScreen ? (
                        <>
                            <FullscreenExitIcon className="w-5 h-5" />
                            Exit Full-Screen
                        </>
                    ) : (
                        <>
                            <FullscreenIcon className="w-5 h-5" />
                            Go Full-Screen
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}