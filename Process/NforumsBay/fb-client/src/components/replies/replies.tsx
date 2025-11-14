export interface ReplyData {
    // _id: string;
    // reply_Id: string;
    username: string;
    textContent: string;
    upVote: number;
    downVote: number;
    // thread_id: string;
    // to: string;
    // replies: string[];     // array of ObjectId strings
    media?: string;        // optional, can be null/missing
    createdAt: string;     // ISO date string
    // updatedAt: string;     // ISO date string
    // __v: number;
}

export interface RepliesProps {
    repliesArray: ReplyData[]; // the actual reply to render
}

const Replies: React.FC<ReplyData> = ({ username, textContent, media, upVote, downVote, createdAt }) => {

    return (
        <div className="text-white p-3 border border-gray-600 rounded-lg mb-3">

            <div className="font-bold text-lg mb-1">
                {username}
            </div>

            <div className="mb-2">
                {textContent}
            </div>

            {media && (
                <div className="text-sm text-gray-400 mb-2">
                    Media: {media}
                </div>
            )}

            <div className="flex gap-4 text-sm mb-2">
                <span>👍 {upVote}</span>
                <span>👎 {downVote}</span>
            </div>

            <div className="text-xs text-gray-500">
                Posted on: {new Date(createdAt).toLocaleString()}
            </div>
        </div>
    );
};

export default Replies;
