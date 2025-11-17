import React, { useEffect, useState } from 'react';
import fetchReplies from '../../api/services/fetchReplies';
import type { PostResponse } from '../../Types/opPostResponce';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import Replies, { type RepliesProps } from '../replies/replies';
import useInputBoxContex from '../../context/showInputBox/use';

interface Props {
    opData: PostResponse | null;
}

const Post: React.FC<Props> = ({ opData }) => {

    const [replies, setReplies] = useState<RepliesProps>();
    const { setShowInputBox, setActionText, setOnPostFun, setPlaceholder } = useInputBoxContex();

    //HERE FETCHING ALL THE REPLIES:
    useEffect(() => {
        const getReplies = async () => {
            try {
                const response = await fetchReplies(opData);
                setReplies(response?.data);
                console.log();
            } catch (err) {
                console.error("Error fetching OP:", err);
            }
        };

        getReplies();
    }, [opData]);

    const postOPReply = (e: React.SyntheticEvent) => {
        if ('preventDefault' in e && typeof e.preventDefault === 'function') {
            e.preventDefault();
        }
        console.log("reply to op posted");
    }

    const postReplyReply = (e: React.SyntheticEvent) => {
        if ('preventDefault' in e && typeof e.preventDefault === 'function') {
            e.preventDefault();
        }
        console.log("reply to reply posted");
    }

    const addOpReply = () => {
        setShowInputBox(true);
        setActionText("Replying OP");
        setPlaceholder("Reply to the op")
        setOnPostFun(postOPReply);
    }

    const addReplyReply = () => {
        setShowInputBox(true);
        setActionText("Replying to reply");
        setPlaceholder("Reply to the op")
        setOnPostFun(postReplyReply);
    }

    return (
        <div>
            <div className="space-y-2">
                {opData ?
                    <div className="text-white flex flex-col gap-2">
                        <div className='flex flex-row justify-between'>

                            <div className='flex gap-2'>
                                <span className="font-bold text-green-400">[OP]</span>
                                <p className='text-yellow-400'>@{opData.post.username}</p>
                                <span className='text-white'>({opData.post.createdAt})</span>
                            </div>
                            <div>
                                <p className='text-green-400'>{opData.post.op_id}</p>
                            </div>

                        </div>

                        <div className='flex flex-col gap-5'>
                            <p className='text-amber-200'>{opData.post.textContent}</p>

                            <div className='flex justify-between'>
                                <div className="flex gap-3 items-center">
                                    <div className="flex gap-1 items-center">
                                        <p>{opData.post.upVote}</p>
                                        <button className='pb-3 cursor-pointer'>
                                            <ThumbsUp />
                                        </button>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <p>{opData.post.downVote}</p>
                                        <button className='cursor-pointer'>
                                            <ThumbsDown />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button className='cursor-pointer text-cyan-500' onClick={addOpReply}>
                                        [REPLY]
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* REPLIES SECTION */}
                        <div className="flex gap-2">
                            <p className='text-green-500'>
                                Replies:
                            </p>

                            <div className='flex flex-col'>
                                {replies?.repliesArray && replies.repliesArray.length > 0
                                    ? replies.repliesArray.map((v, i) => (

                                        <Replies
                                            key={i}
                                            username={v.username}
                                            textContent={v.textContent}
                                            media={v.media}
                                            upVote={v.upVote}
                                            downVote={v.downVote}
                                            createdAt={v.createdAt}
                                            reply_Id={v.reply_Id}
                                            addReplyReply={addReplyReply}
                                        />
                                    )) : <span> 0</span>
                                }
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