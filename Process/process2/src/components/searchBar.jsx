import { SeparatorVertical, X } from "lucide-react";
import Suggestions from "./Suggestions";

const SearchBar = ({ inpText, searchInp, isDarkMode, inpChange, search, submit }) => {

    return <div className="flex flex-col">

        <div className={`flex gap-2 items-center bg-white border-1 border-gray-300 dark:border-none shadow-md dark:bg-[#303134]   ${search ? 'h-auto rounded-b-none rounded-4xl' : 'h-[50px] rounded-4xl'} min-w-[90vw] md:min-w-[50vw] w-[50vw]`}>

            <div className="flex flex-none items-center pl-3">
                <span className="w-5">
                    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                </span>
            </div>

            {/* search input */}
            <div className="flex-1 flex">
                <input type="text"
                    ref={inpText}
                    onChange={(e) => inpChange(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && typeof search === 'function') {
                            submit();
                        }
                    }}
                    className="w-full bg-white dark:bg-[#303134] text-[#d4d6da] focus:outline-0"
                    name="search_input" />
                <div>
                    {searchInp == '' ? null :
                        <div className="flex justify-center items-center">
                            <X color={isDarkMode ? "#bfbfbf" : "#474747"} />
                            <span className="text-3xl text-black dark:text-[#bfbfbf]" >
                                |
                            </span>
                        </div>
                    }
                </div>
            </div>

            {/* mic */}
            <div className="flex flex-none items-center h-full">
                <span className="w-5">
                    <svg className="goxjub" aria-hidden="true" focusable="false" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg"><path fill={isDarkMode ? "#bfbfbf" : "#474747"} d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm-40 280v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z"></path></svg>
                </span>
            </div>

            {/* lens */}
            <div className="flex flex-none items-center h-full ">
                <span className="w-5">
                    <svg className="Gdd5U" aria-hidden="true" focusable="false" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
                        <path fill={isDarkMode ? "#bfbfbf" : "#474747"} d="M480-320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm240 160q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160Zm-440 40q-66 0-113-47t-47-113v-80h80v80q0 33 23.5 56.5T280-200h200v80H280Zm480-320v-160q0-33-23.5-56.5T680-680H280q-33 0-56.5 23.5T200-600v120h-80v-120q0-66 47-113t113-47h80l40-80h160l40 80h80q66 0 113 47t47 113v160h-80Z"></path></svg>
                </span>
            </div>

            {/* AI mode */}
            <div className="h-full flex items-center justify-center flex-none text-xs mr-2 p-1">
                <div className="flex justify-center items-center bg-[#F2F2F2] dark:bg-[#535A62] border-1 border-none dark:border-gray-400 w-20 h-9 rounded-4xl">
                    <span>
                        <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"></rect></g><g><g>
                            <path fill={isDarkMode ? "#bfbfbf" : "#474747"} d="M17.5 12c0-3.04 2.46-5.5 5.5-5.5-3.04 0-5.5-2.46-5.5-5.5 0 3.04-2.46 5.5-5.5 5.5 3.04 0 5.5 2.46 5.5 5.5z"></path>
                            <path fill={isDarkMode ? "#bfbfbf" : "#474747"} d="M15.65 11.58c.18-.5.27-1.03.31-1.58h-2c-.1 1.03-.51 1.93-1.27 2.69-.88.87-1.94 1.31-3.19 1.31C7.03 14 5 12.07 5 9.5 5 7.03 6.93 5 9.5 5c.46 0 .89.08 1.3.2l1.56-1.56C11.5 3.22 10.55 3 9.5 3 5.85 3 3 5.85 3 9.5S5.85 16 9.5 16c.56 0 2.26-.06 3.8-1.3l6.3 6.3 1.4-1.4-6.3-6.3c.4-.5.72-1.08.95-1.72z"></path></g></g></svg>
                    </span>

                    <p className="text-black dark:text-[#e8e8e8]">
                        AI Mode
                    </p>
                </div>
            </div>
        </div>

        <div className="bg-white border-1 border-gray-300 dark:border-none shadow-md dark:bg-[#303134] h-auto min-w-[90vw] md:min-w-[50vw] w-[50vw]">
            <Suggestions suggestionsData={search} />
        </div>
    </div>
}

export default SearchBar;