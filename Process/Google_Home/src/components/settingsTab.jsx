import { createRef } from "react";
import { useTheme } from "../context/theme";

// use createRef so the exported ref is stable and can be used outside
// of React component hooks (for example by the backdrop utility)
export const settingsTab = createRef();

const Settings = () => {

    const { isDarkMode, toggleTheme } = useTheme();

    return <>
        <div className="fixed bottom-10 right-5" ref={settingsTab}>
            <div className="flex flex-col p-2 gap-2 bg-white dark:bg-[#1f1f1f] text-black dark:text-white rounded-lg shadow-lg text-sm">
                <ul className="list-none">
                    <li>
                        <a href="#" className="block p-2 rounded-md hover:bg-[#e5e5e5] dark:hover:bg-[#363636]">Search settings</a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 rounded-md hover:bg-[#e5e5e5] dark:hover:bg-[#363636]">Advanced search</a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 rounded-md hover:bg-[#e5e5e5] dark:hover:bg-[#363636]">Your data in Search</a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 rounded-md hover:bg-[#e5e5e5] dark:hover:bg-[#363636]">Search history</a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 rounded-md hover:bg-[#e5e5e5] dark:hover:bg-[#363636]">Search help</a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 rounded-md hover:bg-[#e5e5e5] dark:hover:bg-[#363636]">Send feedback</a>
                    </li>
                </ul>
                <hr className=" border-gray-700" />
                <div className="">
                    <button onClick={toggleTheme} className="block hover:bg-[#e5e5e5] dark:hover:bg-[#363636] p-2 rounded-md focus:outline-0 ">Dark theme: {isDarkMode ? 'On' : 'Off'}</button>
                </div>
            </div>
        </div>
    </>
}

export default Settings;