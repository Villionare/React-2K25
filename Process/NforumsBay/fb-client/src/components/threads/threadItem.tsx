// ThreadItem.tsx
import React from 'react';
import Posts from '../posts/posts';

interface ThreadItemProps {
    threadId: string,
    threadname: string,
    op: string,
    op_replies: string[]
}

const ThreadItem: React.FC<ThreadItemProps> = ({ threadId, threadname, op, op_replies }) => {

    return (
        <div className="border-b-1 border-b-gray-400 text-white flex flex-col justify-between">
            <div className='flex justify-between'>
                <p>&gt;&gt; {threadname}</p>
                <p>{threadId}</p>
            </div>
            <Posts op={op} op_replies={op_replies} />
        </div>
    );
};

export default ThreadItem;