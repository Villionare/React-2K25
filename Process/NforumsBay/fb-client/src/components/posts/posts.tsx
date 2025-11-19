import React, { useEffect, useState } from 'react';
import fetchReplies, { type ReplyData } from '../../api/services/fetchReplies';
import type { PostResponse } from '../../Types/opPostResponce';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import Replies from '../replies/replies';

interface Props {
    opData: PostResponse | null;
    setReplyBtnType: (value: ("" | "replyOP" | "replyREPLY")) => void
    setShowInputBox: (value: boolean) => void
}

interface repliesData {
    repliesArray: ReplyData[]
}

const Post: React.FC<Props> = ({ opData, setReplyBtnType, setShowInputBox }) => {

    const [replies, setReplies] = useState<repliesData>();

    //HERE FETCHING ALL THE REPLIES:
    useEffect(() => {
        const getReplies = async () => {
            try {
                const response = await fetchReplies(opData);
                setReplies(response?.data);
            } catch (err) {
                console.error("Error fetching OP:", err);
            }
        };

        getReplies();
    }, [opData]);

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
                                    <button className='cursor-pointer text-cyan-500' onClick={() => { setShowInputBox(true); setReplyBtnType("replyOP") }}>
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
                                            setReplyBtnType={setReplyBtnType}
                                            setShowInputBox={setShowInputBox}
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