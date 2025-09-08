import { useRef } from "react";

const Ref = () => {

    const inp = useRef(null);
    const pref = useRef(null);

    const focusTheInp = () => {
        inp.current.focus();
    }

    const focusTheP = () => {
        pref.current.focus();
    }

    return <>
        <div className="bg-amber-500 p-10">
            <input ref={inp} type="text" name="" id="" />
            <button type="submit" className="bg-green-500 p-5" onClick={(e) => focusTheInp()}>
                submit
            </button>
            <button type="submit" className="bg-green-500 p-5" onClick={() => focusTheP()}>
                focus the p
            </button>
            <div className="flex items-end h-screen">
                {/* <input type="text" ref={pref} /> */}
                <p ref={pref} tabIndex={-1}>
                    this is a para that will be used for foucusing.
                </p>
            </div>
        </div>
    </>
}

export default Ref;