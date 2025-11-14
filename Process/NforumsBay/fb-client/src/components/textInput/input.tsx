import React, { useRef } from 'react';
// import useSessionContext from '../../context/useContext';
import handleCreateNewOP from '../../api/services/createNewOP';

const InputText: React.FC = () => {
    // const { user } = useSessionContext();
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

    //text area height will increase accordingly
    const handleTextAreaInput = () => {
        const element = textAreaRef.current;
        if (!element) return;

        element.style.height = "auto";
        element.style.height = element.scrollHeight + "px";
    }
    return (
        <div className="sticky px-5 py-2 bottom-0 left-0 right-0 bg-gray-700">
            <form className='w-full h-full flex gap-3'>
                <textarea placeholder='start a new post...'
                    ref={textAreaRef} onInput={handleTextAreaInput}
                    className='flex-1 bg-black text-white border-none focus:outline-0 w-full p-2 rounded resize-none overflow-hidden' />
                <button type="submit" onClick={() => handleCreateNewOP} className='border-none w-[10vw] text-white text-3xl cursor-pointer'>
                    Send
                </button>
            </form>
        </div>
    );
};

export default InputText;