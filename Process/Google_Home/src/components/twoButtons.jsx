import { Link } from "lucide-react";

const TwoButtons = () => {

    return <>
        <div className="flex justify-center gap-3 mt-7 text-sm text-black dark:text-[#e8eaed]">
            <button className="bg-[#f8f9fa] dark:bg-[#303134] rounded-md px-3 py-2">
                Google Search
            </button>
            <button className="bg-[#f8f9fa] dark:bg-[#303134] rounded-md px-3 py-2">
                <a href={'https://doodles.google/'}>
                    I'm Feeling Lucky
                </a>
            </button>
        </div>
    </>
}

export default TwoButtons;