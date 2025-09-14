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

    const divv = useRef();

    function getRandomColor() {
        const randomHex = Math.floor(Math.random() * 16777215).toString(16);

        const paddedHex = "000000".slice(0, 6 - randomHex.length) + randomHex;

        return `#${paddedHex}`;
    }

    // setInterval(() => {
    //     divv.current.style.color = getRandomColor();
    // }, 200);

    return <>
        <div className="bg-amber-500 p-10">
            <div ref={divv} className="text-5xl font-bold">
                this is some babaa text.
            </div>
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