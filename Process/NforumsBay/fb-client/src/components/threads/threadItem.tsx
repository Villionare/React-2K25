// ThreadItem.tsx
import React from 'react';

interface ThreadItemProps {
    threadId: string,
    threadname: string,
    op: string,
    op_replies: string[]
}

const ThreadItem: React.FC<ThreadItemProps> = ({ threadId, threadname, op, op_replies }) => {

    return (
        <div className="text-white flex justify-between">
            <p>id: {threadId}</p>
            <p>thread name: {threadname}</p>
            <p>op: {op}</p>
            <p>op replies: {op_replies}</p>
        </div>
    );
};

export default ThreadItem;