import React, { useEffect, useState } from 'react';
import fetchReplies from '../../api/services/fetchReplies';
import type { PostResponse } from '../../Types/opPostResponce';
import Replies from '../replies/replies';
import { ThumbsDown, ThumbsUp } from 'lucide-react';

interface Props {
    opData: PostResponse | null;
}

const Post: React.FC<Props> = ({ opData }) => {

    // const [replies, setReplies] = useState();

    //HERE FETCHING ALL THE REPLIES:
    useEffect(() => {
        const getReplies = async () => {
            try {
                const response = await fetchReplies({ opData });
                setReplies();
                console.log();
            } catch (err) {
                console.error("Error fetching OP:", err);
            }
        };

        getReplies();
    });

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-50">Posts</h2>
            <div className="space-y-2">
                {opData ?
                    <div className="text-white flex flex-col gap-3">
                        <div className='flex flex-row justify-between'>
                            <p># {opData.post.username} &gt;&gt; <span className='text-red-500'>({opData.post.createdAt})</span></p>
                            <p>{opData.post.op_id}</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='text-amber-200'>{opData.post.textContent}</p>

                            <div className='flex gap-3 items-center'>
                                <div className="flex gap-1 items-center">
                                    <p>{opData.post.upVote}</p>
                                    <ThumbsUp />
                                </div>
                                <div className="flex gap-1 items-center">
                                    <p>{opData.post.downVote}</p>
                                    <ThumbsDown />
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <p className="text-slate-400">Loading...</p>}
            </div>
        </div >
    );
};

export default Post;

//  {opData ? {}: (
//                         <p className = "text-slate-400">Loading...</p>
//                 )}