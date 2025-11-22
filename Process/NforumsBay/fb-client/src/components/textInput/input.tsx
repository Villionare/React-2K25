import React, { useEffect, useRef, useState } from 'react';
import replyToReply from '../../api/services/replyReply';
import replyToOP from '../../api/services/replyOP';
import useSessionContext from '../../context/useContext';

interface Props {
    selectedThreadId: string | undefined,
    ReplyID?: string,
    replyOPID?: string,
    typeFor: string,
    actionText: string,
    placeholder: string,
    setShowInputBox: (value: boolean) => void,
}

const InputText: React.FC<Props> = ({ typeFor, setShowInputBox, actionText, placeholder, replyOPID, ReplyID, selectedThreadId }) => {

    const [replyText, setReplyText] = useState<string>("");
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const { user } = useSessionContext();

    //saving the text values in the replyText state
    useEffect(() => {
        setReplyText(textAreaRef.current?.value ?? "");
        console.log(replyText);
    }, [textAreaRef.current?.value, replyText]);

    //text area height will increase accordingly
    const handleTextAreaInput = () => {
        const element = textAreaRef.current;
        if (!element) return;

        element.style.height = "auto";
        element.style.height = element.scrollHeight + "px";
    }

    const submitDataAndPOST = () => {
        if (typeFor === "reply") {
            replyToReply({
                username: user?.session_data?.username ?? "",
                textContent: replyText,
                to: ReplyID ?? "", //this is not a good practise
                media: "image1, image2",
                thread_id: selectedThreadId ?? ""
            });
        } else if (typeFor === "op") {
            const response = replyToOP({
                username: user?.session_data?.username ?? "",
                textContent: replyText,
                to: replyOPID ?? "", //this is not a good practise
                media: "image1, image2",
                thread_id: selectedThreadId ?? ""
            });
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