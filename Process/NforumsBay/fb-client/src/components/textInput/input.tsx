import React, { useRef } from 'react';
// import useSessionContext from '../../context/useContext';

interface Props {
    placeholder: string,
    actionText: string,
    onPostFun: (e: React.SyntheticEvent) => void,
    setShowInputBox: (value: boolean) => void,
}

const InputText: React.FC<Props> = ({ setShowInputBox, actionText, placeholder, onPostFun }) => {
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

    //text area height will increase accordingly
    const handleTextAreaInput = () => {
        const element = textAreaRef.current;
        if (!element) return;

        element.style.height = "auto";
        element.style.height = element.scrollHeight + "px";
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
                    console.log(onPostFun);
                }} className='w-full h-full flex gap-2 '>
                    <textarea placeholder={placeholder}
                        ref={textAreaRef} onInput={handleTextAreaInput}
                        className='border-1 border-gray-900 bg-black text-white focus:outline-0 w-full p-2 resize-none overflow-hidden' />
                    <button
                        type="submit"
                        className='border border-gray-900 w-[10vw] text-red-600 bg-black text-3xl cursor-pointer hover:bg-gray-900'
                    >
                        POST!
                    </button>
                </form>

            </div>
        </div >
    );
};

export default InputText;