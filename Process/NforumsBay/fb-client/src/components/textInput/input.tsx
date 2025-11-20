import React, { useRef } from 'react';
import replyToReply from '../../api/services/replyReply';
import replyToOP from '../../api/services/replyOP';

interface Props {
    ReplyID: string,
    typeFor: string,
    replyOPID: string,
    actionText: string,
    placeholder: string,
    setShowInputBox: (value: boolean) => void,
}

const InputText: React.FC<Props> = ({ typeFor, setShowInputBox, actionText, placeholder, replyOPID, ReplyID }) => {
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

    //text area height will increase accordingly
    const handleTextAreaInput = () => {
        const element = textAreaRef.current;
        if (!element) return;

        element.style.height = "auto";
        element.style.height = element.scrollHeight + "px";
    }

    const submitDataAndPOST = () => {
        if (typeFor === "reply") {
            replyToReply({ username: "star", textContent: "check reply from input component", to: ReplyID, media: "sdfasfds" });
        } else if (typeFor === "op") {
            const response = replyToOP({ username: "star", textContent: "check reply from input component", to: replyOPID, media: "sdfasfds", thread_id: "fucking reply id" });
            console.log(response);
        }
    }

    return (
        <div className="sticky px-2 py-2 bottom-0 left-0 right-0 bg-black border-t-1 border-gray-900">

            <div className='flex gap-2'>
                <div>
                    <button className='text-white bg-red-600 px-5 cursor-pointer h-full'
                        onClick={() => {
                            setShowInputBox(false);
                        }}>
                        X
                    </button>
                </div>

                <div className='w-fit p-2 ml-2 border-1 border-gray-900'>
                    <label className='text-white' htmlFor="chooseAction">Action:</label>
                    <span className='text-white'>{actionText}</span>
                </div>

                <form onSubmit={(e) => {
                    e?.preventDefault();
                    submitDataAndPOST();
                }}
                    className='w-full h-full flex gap-2 '>
                    <textarea placeholder={placeholder}
                        ref={textAreaRef} onInput={handleTextAreaInput}
                        className='border-1 border-gray-900 bg-black text-white focus:outline-0 w-full p-2 resize-none overflow-hidden' />
                    <button type="submit"
                        className='border border-gray-900 w-[10vw] text-red-600 bg-black text-3xl cursor-pointer hover:bg-gray-900'>
                        POST!
                    </button>
                </form>
            </div>
        </div >
    );
};

export default InputText;