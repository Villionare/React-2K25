// Threads.tsx
import React, { useEffect, useRef, useState } from 'react';
import ThreadItem from './threadItem';
import fetchThreads from '../../api/services/fetchThreads';
import type { THREAD_RESPONSE } from '../../Types/threads';
import { Maximize, Minimize } from 'lucide-react';

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


    const toggleFullScreen = async () => {
        if (!threadsCotainer.current) return;

        if (!fullScreen) {
            // ---- enter fullscreen ----
            try {
                await threadsCotainer.current.requestFullscreen();
                setFullScreen(true);
            } catch (err) {
                console.error('Fullscreen request failed', err);
            }
        } else {
            // ---- exit fullscreen ----
            try {
                await document.exitFullscreen();
                setFullScreen(false);
            } catch (err) {
                console.error('Exit fullscreen failed', err);
            }
        }
    };

    const false_fullscreen = "flex flex-col max-h-screen overflow-scroll bg-black border-t-4 border-gray-700";
    const true_fullscreen = "relative bg-black overflow-y-scroll z-10 border-1 border-b-blue-700";

    return (
        <div ref={threadsCotainer} className={fullScreen ? true_fullscreen : false_fullscreen}>

            <div className='text-white absolute top-0 left-0 right-0 justify-between my-6 mx-15'>

                <div className="flex justify-between">
                    
                    <h2 className="text-3xl font-bold">Threads:</h2>
                    <div className='text-white'>
                        <button onClick={toggleFullScreen} className={`px-5 py-2 rounded-lg bg-gray-900 hover:bg-white/30 cursor-pointer`}>
                            {fullScreen ? (<Minimize className="w-5 h-5" />) : (<Maximize className="w-5 h-5" />)}
                        </button>
                    </div>
                </div>
            </div>

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

        </div >
    );
};

export default Threads;

