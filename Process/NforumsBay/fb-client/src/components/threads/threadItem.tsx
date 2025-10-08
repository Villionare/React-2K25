// ThreadItem.tsx
import React from 'react';
import useSessionContext from '../../context/useContext';

interface ThreadItemProps {
    thread: {
        id: number;
        title: string;
        author: string;
        replies: number;
    };
    onDelete: (id: number) => void;
}

const ThreadItem: React.FC<ThreadItemProps> = ({ thread, onDelete }) => {
    const { user } = useSessionContext();

    return (
        <div className="p-4 border-b border-slate-700 bg-slate-800 hover:bg-slate-700">
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <h3 className="font-semibold text-slate-50 mb-1">{thread.title}</h3>
                    <p className="text-sm text-slate-400">By {thread.author} | {thread.replies} replies</p>
                </div>
                {
                    user?.session_data?.type === "admin" ?
                        <button
                            onClick={() => onDelete(thread.id)}
                            className="ml-4 text-slate-400 hover:text-red-400 transition-colors self-start"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button> : null
                }

            </div>
        </div>
    );
};

export default ThreadItem;