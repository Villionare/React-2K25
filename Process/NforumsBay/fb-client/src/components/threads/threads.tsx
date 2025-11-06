// Threads.tsx
import React, { useEffect, useRef, useState } from 'react';
import ThreadItem from './threadItem';
import fetchThreads from '../../api/services/fetchThreads';
import type { THREAD_RESPONSE } from '../../Types/threads';
import { Maximize, Minimize } from 'lucide-react';
import GlobalEscExitFullscreen from '../../utils/globalExitFullscreen';

interface Props_threadsFun {
    board_slug: string
}

const Threads: React.FC<Props_threadsFun> = ({ board_slug }) => {

    const [threads, setThreads] = useState<THREAD_RESPONSE>();
    const threadsCotainer = useRef<HTMLDivElement>(null);
    const [fullScreen, setFullScreen] = useState<boolean>(false);
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

    //fetcing the thread using the provided slug.
    useEffect(() => {
        fetchThreads(board_slug)
            .then(res => { setThreads(res); return res })
            .then(res => console.log(res));
    }, [board_slug]);


    //when there is a escape keypress the full screen window will be closed
    useEffect(() => {
        const handleKeyDown = async (event: KeyboardEvent) => {
            if (!threadsCotainer.current) return;

            if (event.key.toLowerCase() === "f") {
                if (!document.fullscreenElement) {
                    try {
                        await threadsCotainer.current.requestFullscreen();
                        console.log("Entered fullscreen");
                    } catch (err) {
                        console.error("Error entering fullscreen:", err);
                    }
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [])

    const toggleFullScreen = async () => {
        if (!threadsCotainer.current) return;

        if (!fullScreen) {
            try {
                await threadsCotainer.current.requestFullscreen();
                setFullScreen(true);
            } catch (err) {
                console.error('Fullscreen request failed', err);
            }
        } else {
            try {
                await document.exitFullscreen();
                setFullScreen(false);
            } catch (err) {
                console.error('Exit fullscreen failed', err);
            }
        }
    };

    //text area height will increase accordingly
    const handleTextAreaInput = () => {
        const element = textAreaRef.current;
        if (!element) return;

        element.style.height = "auto";
        element.style.height = element.scrollHeight + "px";
    }


    const false_fullscreen = "max-h-screen overflow-y-scroll bg-black scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200";
    const true_fullscreen = "bg-black overflow-y-scroll z-10 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200";

    return (
        <div ref={threadsCotainer} className={fullScreen ? true_fullscreen : false_fullscreen}>
            <GlobalEscExitFullscreen />
            <div className='sticky top-0 left-0 right-0 bg-black text-white justify-between'>
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">Threads:</h2>
                    <div className='text-white'>
                        <span className='text-white italic'>F - for fullscreen | Esc for Exit</span>
                        <button onClick={toggleFullScreen} className={`px-5 py-2 cursor-pointer`}>
                            {fullScreen ? (<><Minimize className="w-5 h-5" /></>) : (<Maximize className="w-5 h-5" />)}
                        </button>
                    </div>
                </div>
            </div>

            {/* main content */}
            <div className="space-y-2 mx-15" >
                {
                    threads?.threads && threads.threads.length > 0 ? (
                        threads.threads.map(thread => (
                            <ThreadItem
                                key={thread._id}
                                threadId={thread.thread_id}
                                threadname={thread.name}
                                op={thread.op_post}
                            />
                        ))
                    ) : (<div className='text-white'><p>No threads exist</p></div>)}
            </div >

            {/* input section */}
            <div className="sticky px-5 py-2 bottom-0 left-0 right-0 bg-gray-700">
                <form className='w-full h-full flex gap-3'>
                    <textarea ref={textAreaRef} onInput={handleTextAreaInput} className='flex-1 bg-black text-white border-none focus:outline-0 w-full p-2 rounded resize-none overflow-hidden' />
                    <button type="submit" className='border-none w-[10vw] text-white text-3xl cursor-pointer'>
                        Send
                    </button>
                </form>
            </div>
        </div >
    );
};

export default Threads;

