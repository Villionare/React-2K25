// ThreadItem.tsx
import React, { useEffect, useState } from 'react';
import Post from '../posts/posts';
import fetchOP from '../../api/services/fetchOp';
import type { PostResponse } from '../../Types/opPostResponce';

interface ThreadItemProps {
    threadId: string,
    threadname: string,
    op: string,
    setReplyBtnType: (value: ("" | "replyOP" | "replyREPLY")) => void
    setShowInputBox: (value: boolean) => void
}

const ThreadItem: React.FC<ThreadItemProps> = ({ threadId, threadname, op, setReplyBtnType, setShowInputBox }) => {

    //FOR EVERY POST THREAD ITEM IN THE BOARD, THE RESPECTIVE OP POST WILL BE FETCHED FROM THE SERVER.
    const [opData, setOpData] = useState<PostResponse | null>(null);

    useEffect(() => {
        const getOP = async () => {
            try {
                const response = await fetchOP({ op });
                setOpData(response.data);
            } catch (err) {
                console.error("Error fetching OP:", err);
            }
        };

        getOP();
    }, [op]);

    return (
        <div className="mb-5 p-3 gap-2 border-b-1 border-b-gray-400 text-white flex flex-col justify-between">
            <div className='flex justify-between'>
                <p className='text-blue-400'>&gt;&gt; {threadname}</p>
                <p className='text-blue-400'>{threadId}</p>
            </div>
            <Post opData={opData} setReplyBtnType={setReplyBtnType} setShowInputBox={setShowInputBox} />
        </div>
    );
};

export default ThreadItem;