// Threads.tsx
import React, { useEffect, useRef, useState } from 'react';
import ThreadItem from './threadItem';
import fetchThreads from '../../api/services/fetchThreads';
import type { THREAD_RESPONSE } from '../../Types/threads';
import { Maximize, Minimize } from 'lucide-react';
import InputText from '../textInput/input';

interface Props_threadsFun {
    board_slug: string
}

const Threads: React.FC<Props_threadsFun> = ({ board_slug }) => {

    const [threads, setThreads] = useState<THREAD_RESPONSE>();
    const threadsCotainer = useRef<HTMLDivElement>(null);
    const [fullScreen, setFullScreen] = useState<boolean>(false);

    //fetcing the thread using the provided slug.
    useEffect(() => {
        fetchThreads(board_slug)
            .then(res => { setThreads(res); return res })
            .then(res => console.log(res));
    }, [board_slug]);

    //full screen handling
    useEffect(() => {
        const handleFullscreenChange = () => {
            setFullScreen(!!document.fullscreenElement);
        };

        const handleKeyDown = async (event: KeyboardEvent) => {
            if (!threadsCotainer.current) return;

            if (event.key.toLowerCase() === "f") {
                if (!document.fullscreenElement) {
                    try {
                        await threadsCotainer.current.requestFullscreen();
                    } catch (err) {
                        console.error("Error entering fullscreen:", err);
                    }
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        document.addEventListener("fullscreenchange", handleFullscreenChange);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);




    const false_fullscreen = "scrollbar-hide border-t-2 border-gray-900 max-h-screen overflow-y-scroll bg-black scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200";
    const true_fullscreen = "scrollbar-hide bg-black overflow-y-scroll z-10 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200";

    return (
        <div ref={threadsCotainer} className={fullScreen ? true_fullscreen : false_fullscreen}>
            {/* <GlobalEscExitFullscreen /> */}
            <div className='sticky  pt-5  top-0 left-0 right-0 bg-black text-white justify-between'>
                <div className="flex justify-between">
                    <h2 className="text-red-600 text-3xl font-bold mb-2 mx-5">Threads:</h2>
                    <div className='text-white flex gap-4'>
                        <span className='text-red-600 italic'>F - for fullscreen | Esc for Exit</span>
                        {fullScreen ?
                            <Minimize className="w-5 h-5" /> :
                            <Maximize className="w-5 h-5" />}
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
            <InputText />
        </div >
    );
};

export default Threads;

