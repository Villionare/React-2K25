// Posts.tsx
import React from 'react';
import PostItem from './postItem';
import fetchOP from '../../api/services/fetchOp';

interface props {
    op: string,
    op_replies: string[]
}

const Posts: React.FC<props> = ({ op, op_replies }) => {
    const handleDelete = (id: number) => {
        console.log(`Deleting post ${id}`); // Temporary handler
    };

    //FETCHING THE OP POST TO RENDER
    const opData = fetchOP(op);

    return (
        <div className="border-1 border-amber-400">
            <h2 className="text-3xl font-bold mb-6 text-slate-50">Posts</h2>
            <div className="space-y-2">
                {temporaryPosts.map((post) => (
                    <PostItem key={post.id} post={post} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default Posts;