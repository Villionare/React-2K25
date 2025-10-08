// PostItem.tsx
import React from 'react';
import useSessionContext from '../../context/useContext';

interface PostItemProps {
    post: {
        id: number;
        author: string;
        content: string;
        timestamp: string;
    };
    onDelete: (id: number) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onDelete }) => {

    const { user } = useSessionContext();

    return (
        <div className="p-4 border-b border-slate-700 bg-slate-800 hover:bg-slate-700">
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-slate-50">{post.author}</span>
                        <span className="text-sm text-slate-400">{post.timestamp}</span>
                    </div>
                    <p className="text-slate-200 mb-2">{post.content}</p>
                </div>
                {user?.session_data?.type === "admin" ?
                    <button
                        onClick={() => onDelete(post.id)}
                        className="text-slate-400 hover:text-red-400 transition-colors self-start"
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

export default PostItem;