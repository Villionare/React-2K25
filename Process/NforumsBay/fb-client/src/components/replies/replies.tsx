import { ThumbsDown, ThumbsUp } from "lucide-react";
import type { ReplyData } from "../../api/services/fetchReplies";

export interface RepliesProps {
    repliesArray: ReplyData[];

}

const Replies: React.FC<ReplyData> = ({ username, textContent, media, upVote, downVote, createdAt, reply_Id, addReplyReply }) => {

    return (
        <div className="text-white p-3 border border-gray-600 rounded-lg mb-3">

            <div className="flex justify-between">

                <div className="flex gap-2 items-center">
                    <div className="text-yellow-500 mb-1">
                        @{username}
                    </div>
                    <div className="text-xs text-gray-500">
                        Posted on: {new Date(createdAt).toLocaleString()}
                    </div>
                </div>
                <div className="text-indigo-700">
                    {reply_Id}
                </div>
            </div>

            <div className="mb-2">
                {textContent}
            </div>

            {media && (
                <div className="text-sm text-gray-400 mb-2">
                    Media: {media}
                </div>
            )}

            <div className="flex justify-between items-center">
                <div className="flex gap-4 text-sm mb-2">
                    <div className="flex gap-1 items-center">
                        <p>{upVote}</p>
                        <button className='pb-3 cursor-pointer'>
                            <ThumbsUp />
                        </button>
                    </div>
                    <div className="flex gap-1 items-center">
                        <p>{downVote}</p>
                        <button className='cursor-pointer'>
                            <ThumbsDown />
                        </button>
                    </div>
                </div>
                <button className="text-red-500 cursor-pointer" onClick={addReplyReply}>
                    [Reply]
                </button>
            </div>
        </div>
    );
};

export default Replies;
