// const Footer = () => {

//     return <>
//         <div className="bg-[#3d3d3d] flex flex-col p-7 font-extralight">
//             <div>
//                 <p className="text-white">Movies Makes us more Human</p>
//                 <p className="text-gray-400"><i>-Abhay Singh</i></p>
//             </div>
//             <br />
//             <div className="flex flex-col text-gray-400">
//                 <div className="flex gap-2">
//                     <div className="contact-developer">Connect:</div>
//                     <div className="linked"><i className="fa-brands fa-linkedin"></i></div >
//                     <div className="x" > <i className="fa-brands fa-square-x-twitter" ></i ></div >
//                     <div className="instagram" > <i className="fa-brands fa-square-instagram" ></i ></div >
//                     <div className="git" > <i className="fa-brands fa-github" ></i ></div >
//                 </div >
//                 <br />
//                 <div>
//                     <div className="about"><a href=""> This website is made by Abhay Singh i the year 2004 also it is made only using html css javascript, i will do more projects in future for now connect with me...</a></div>
//                 </div >
//             </div >
//             <br />
//             <div className="flex justify-center text-sm">
//                 <p className=" font-bold text-gray-400">MoviesJournal - 2025<i className="fa-solid fa-copyright"></i></p>
//             </div >
//         </div >
//     </>
// }

// export default Footer;

const Footer = () => {
    return (
        <footer className="bg-[#3d3d3d] text-gray-300 px-6 py-10 md:px-16 md:py-14 font-light">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
                {/* Quote */}
                <div className="space-y-2">
                    <p className="text-white text-lg md:text-xl font-semibold">
                        Movies make us more Human
                    </p>
                    <p className="text-gray-400 text-sm italic">— Abhay Singh</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-5 text-2xl">
                    <a href="#" className="hover:text-white transition-colors">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <i className="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <i className="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-600 my-8"></div>

            {/* About Section */}
            <div className="max-w-3xl text-sm leading-relaxed text-gray-400">
                <p>
                    This website was created by <span className="text-white">Abhay Singh</span> in 2004.
                    Built only with <span className="text-white">HTML, CSS, and JavaScript</span>,
                    this is just the beginning. More projects will come in the future —
                    for now, let’s stay connected!
                </p>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 flex justify-center text-xs text-gray-500">
                <p>
                    <span className="font-semibold text-gray-300">MoviesJournal</span> — 2025{" "}
                    <i className="fa-solid fa-copyright"></i>
                </p>
            </div>
        </footer>
    );
};

export default Footer;


