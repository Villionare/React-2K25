import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Settings from "./settingsTab";

const MainPage = () => {

    const [triggerSettings, setTriggerSettings] = useState(false);
    const inpText = useRef();

    useEffect(() => {
        inpText.current.focus();
    }, []);

    return <div className="flex flex-col bg-[#ffffff] dark:bg-[#202124] min-h-screen box-border m-0">

        <div className="flex-[60vh]">
            {/* header */}
            <header className="flex items-center text-white text-[13px] p-5 ">
                <div className="flex-1 flex gap-3">
                    <div className="flex">
                        <p><Link to={'https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header'}>About</Link></p>
                    </div>
                    <div className="flex">
                        <Link to={'https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN'}>
                            Store
                        </Link>
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-end gap-3">
                    <p>Gmail</p>
                    <p>Images</p>
                    <div>
                        <svg focusable="false" height="24px" viewBox="0 -960 960 960" width="24px"> <path fill="#e0e1e1" d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z"></path> </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grip-icon lucide-grip"><circle cx="12" cy="5" r="1" /><circle cx="19" cy="5" r="1" /><circle cx="5" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /><circle cx="12" cy="19" r="1" /><circle cx="19" cy="19" r="1" /><circle cx="5" cy="19" r="1" /></svg>
                    </div>
                    <div>
                        <button className="bg-[#b3d7ef] p-2 text-black rounded-4xl cursor-pointer">Sign in</button>
                    </div>
                </div>
            </header>

            {/* google logo */}
            <div className="flex flex-col justify-center items-center">
                <svg className="lnXdpd mb-5" aria-label="Google" height="92" role="img" viewBox="0 0 272 92" width="260" xmlns="http://www.w3.org/2000/svg">
                    <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44zm57.74 0c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44zm55.74-20.84v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36zM225 3v65h-9.5V3h9.5zm37.02 51.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93zM35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#FFF">
                    </path>
                </svg>
            </div>

            {/* search bar */}
            <div className="flex items-center justify-center">
                <div className="flex gap-2 items-center bg-[#45494d] w-[50vw] h-[50px] rounded-4xl">

                    <div className="flex flex-none items-center pl-3">
                        <span className="w-5">
                            <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                            </svg>
                        </span>
                    </div>

                    {/* search input */}
                    <div className="flex-1">
                        <input type="text" ref={inpText} className="w-full bg-[#45494d] text-[#d4d6da] focus:outline-0" name="search_input" />
                    </div>

                    {/* mic */}
                    <div className="flex flex-none items-center h-full">
                        <span className="w-5">
                            <svg className="goxjub" aria-hidden="true" focusable="false" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg"><path fill="#bfbfbf" d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm-40 280v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z"></path></svg>
                        </span>
                    </div>

                    {/* lens */}
                    <div className="flex flex-none items-center h-full ">
                        <span className="w-5">
                            <svg className="Gdd5U" aria-hidden="true" focusable="false" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#bfbfbf" d="M480-320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm240 160q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160Zm-440 40q-66 0-113-47t-47-113v-80h80v80q0 33 23.5 56.5T280-200h200v80H280Zm480-320v-160q0-33-23.5-56.5T680-680H280q-33 0-56.5 23.5T200-600v120h-80v-120q0-66 47-113t113-47h80l40-80h160l40 80h80q66 0 113 47t47 113v160h-80Z"></path></svg>
                        </span>
                    </div>

                    {/* AI mode */}
                    <div className="h-full flex items-center justify-center flex-none text-xs mr-2 p-1">
                        <div className="flex justify-center items-center border-1 border-gray-400 w-20 h-9 rounded-4xl">
                            <span>
                                <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"></rect></g><g><g>
                                    <path fill="#bfbfbf" d="M17.5 12c0-3.04 2.46-5.5 5.5-5.5-3.04 0-5.5-2.46-5.5-5.5 0 3.04-2.46 5.5-5.5 5.5 3.04 0 5.5 2.46 5.5 5.5z"></path>
                                    <path fill="#bfbfbf" d="M15.65 11.58c.18-.5.27-1.03.31-1.58h-2c-.1 1.03-.51 1.93-1.27 2.69-.88.87-1.94 1.31-3.19 1.31C7.03 14 5 12.07 5 9.5 5 7.03 6.93 5 9.5 5c.46 0 .89.08 1.3.2l1.56-1.56C11.5 3.22 10.55 3 9.5 3 5.85 3 3 5.85 3 9.5S5.85 16 9.5 16c.56 0 2.26-.06 3.8-1.3l6.3 6.3 1.4-1.4-6.3-6.3c.4-.5.72-1.08.95-1.72z"></path></g></g></svg>
                            </span>

                            <p className="text-[#e8e8e8]">
                                AI Mode
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* two buttons */}
            <div className="flex justify-center gap-2 mt-7 text-sm text-[#e8eaed]">
                <button className="bg-[#303134] rounded-md p-2">
                    Google Search
                </button>
                <button className="bg-[#303134] rounded-md p-2">
                    I'm feeling Lucky
                </button>
            </div>

            {/* languages */}
            <div className="flex justify-center gap-1 text-[12px] text-white mt-10">
                <p className="text-[#b9b9b9]">Google offered in:</p>
                <a className="text-[#99c3ff] hover:underline visited:text-[#c58af9]" href="https://www.google.com/setprefs?sig=0_QQ8dMJIbeQ77YJ0zk_IgI2aCdmw%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjev7qe182PAxX8RmwGHdylH_YQ2ZgBCCU">
                    हिन्दी
                </a>
                <a className="text-[#99c3ff] hover:underline visited:text-[#c58af9]" href="https://www.google.com/setprefs?sig=0_QQ8dMJIbeQ77YJ0zk_IgI2aCdmw%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjev7qe182PAxX8RmwGHdylH_YQ2ZgBCCY">
                    বাংলা
                </a>
                <a className="text-[#99c3ff] hover:underline visited:text-[#c58af9]" href="https://www.google.com/setprefs?sig=0_QQ8dMJIbeQ77YJ0zk_IgI2aCdmw%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjev7qe182PAxX8RmwGHdylH_YQ2ZgBCCc">
                    తెలుగు
                </a>
                <a className="text-[#99c3ff] hover:underline visited:text-[#c58af9]" href="https://www.google.com/setprefs?sig=0_QQ8dMJIbeQ77YJ0zk_IgI2aCdmw%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjev7qe182PAxX8RmwGHdylH_YQ2ZgBCCg">
                    मराठी
                </a>
                <a className="text-[#99c3ff] hover:underline visited:text-[#c58af9]" href="https://www.google.com/setprefs?sig=0_QQ8dMJIbeQ77YJ0zk_IgI2aCdmw%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjev7qe182PAxX8RmwGHdylH_YQ2ZgBCCk">
                    தமிழ்
                </a>
                <a className="text-[#99c3ff] hover:underline visited:text-[#c58af9]" href="https://www.google.com/setprefs?sig=0_QQ8dMJIbeQ77YJ0zk_IgI2aCdmw%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjev7qe182PAxX8RmwGHdylH_YQ2ZgBCCo">
                    ગુજરાતી
                </a>
                <a className="text-[#99c3ff] hover:underline visited:text-[#c58af9]" href="https://www.google.com/setprefs?sig=0_QQ8dMJIbeQ77YJ0zk_IgI2aCdmw%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjev7qe182PAxX8RmwGHdylH_YQ2ZgBCCs">
                    ಕನ್ನಡ
                </a>
                <a className="text-[#99c3ff] hover:underline visited:text-[#c58af9]" href="https://www.google.com/setprefs?sig=0_QQ8dMJIbeQ77YJ0zk_IgI2aCdmw%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjev7qe182PAxX8RmwGHdylH_YQ2ZgBCCw">
                    മലയാളം
                </a>
                <a className="text-[#99c3ff] hover:underline visited:text-[#c58af9]" href="https://www.google.com/setprefs?sig=0_QQ8dMJIbeQ77YJ0zk_IgI2aCdmw%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjev7qe182PAxX8RmwGHdylH_YQ2ZgBCC0">
                    ਪੰਜਾਬੀ
                </a>

            </div>
        </div>

        <div className="flex-[40vh] flex items-end">
            {/* footer */}
            <div className="flex flex-col text-white text-sm bg-[#171717] w-full">

                <div className="flex-1 flex py-3 px-7">
                    India
                </div>

                <hr className="text-[#3d403f]" />

                <div className="flex-1 flex justify-between">
                    <div className="flex py-3 px-7 gap-5">
                        <a className="hover:underline" href="https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpafooter&amp;fg=1" ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://www.google.com/intl/en_in/ads/%3Fsubid%3Dww-ww-et-g-awa-a-g_hpafoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpafooter%26fg%3D1&amp;ved=0ahUKEwjev7qe182PAxX8RmwGHdylH_YQkdQCCC4&amp;opi=89978449">Advertising</a>
                        <a className="hover:underline" href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpbfooter&amp;fg=1" ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://www.google.com/services/%3Fsubid%3Dww-ww-et-g-awa-a-g_hpbfoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpbfooter%26fg%3D1&amp;ved=0ahUKEwjev7qe182PAxX8RmwGHdylH_YQktQCCC8&amp;opi=89978449">Business</a>
                        <a className="hover:underline" href="https://google.com/search/howsearchworks/?fg=1"> How Search works </a>
                    </div>
                    <div className="flex py-3 px-7 gap-5">
                        <a className="hover:underline" href="https://policies.google.com/privacy?hl=en-IN&amp;fg=1" ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://policies.google.com/privacy%3Fhl%3Den-IN%26fg%3D1&amp;ved=0ahUKEwjev7qe182PAxX8RmwGHdylH_YQ8awCCDA&amp;opi=89978449">Privacy</a>
                        <a className="hover:underline" href="https://policies.google.com/terms?hl=en-IN&amp;fg=1" ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://policies.google.com/terms%3Fhl%3Den-IN%26fg%3D1&amp;ved=0ahUKEwjev7qe182PAxX8RmwGHdylH_YQ8qwCCDE&amp;opi=89978449">Terms</a>
                        <button className="hover:underline" onClick={() => setTriggerSettings(prev => !prev)}>
                            Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {triggerSettings ? <Settings /> : null}

    </div>
}

export default MainPage;