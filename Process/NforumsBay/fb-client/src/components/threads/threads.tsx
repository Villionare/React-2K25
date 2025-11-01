// Threads.tsx
import React, { useEffect, useState } from 'react';
import ThreadItem from './threadItem';
import fetchThreads from '../../api/services/fetchThreads';
import type { THREAD_RESPONSE } from '../../Types/threads';

interface Props_threadsFun {
    board_slug: string
}

const Threads: React.FC<Props_threadsFun> = ({ board_slug }) => {

    const [threads, setThreads] = useState<THREAD_RESPONSE>();

    //fetcing the thread using the provided slug.
    useEffect(() => {
        fetchThreads(board_slug)
            .then(res => { setThreads(res); return res })
            .then(res => console.log(res));

    }, [board_slug]);


    return (
        <div className="border-1 border-amber-400">
            <h2 className="text-3xl font-bold mb-6 text-slate-50">Threads</h2>
            <div className="space-y-2">
                {
                    threads?.threads && threads.threads.length > 0 ? (
                        threads.threads.map(thread => (
                            <ThreadItem
                                key={thread._id}
                                threadId={thread._id}
                                threadname={thread.name}
                                op={thread.op_post}
                                op_replies={thread.replies}
                            />
                        ))
                    ) : (
                        <div className='text-white'>
                            <p>No threads exist</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Threads;