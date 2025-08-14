const Footer = () => {

    return <>
        <div className="bg-[#3d3d3d] flex flex-col p-7 font-extralight">
            <div>
                <p className="text-white">Movies Makes us more Human</p>
                <p className="text-gray-400"><i>-Abhay Singh</i></p>
            </div>
            <br />
            <div className="flex flex-col text-gray-400">
                <div className="flex gap-2">
                    <div className="contact-developer">Connect:</div>
                    <div className="linked"><i className="fa-brands fa-linkedin"></i></div >
                    <div className="x" > <i className="fa-brands fa-square-x-twitter" ></i ></div >
                    <div className="instagram" > <i className="fa-brands fa-square-instagram" ></i ></div >
                    <div className="git" > <i className="fa-brands fa-github" ></i ></div >
                </div >
                <br />
                <div>
                    <div className="about"><a href=""> This website is made by Abhay Singh i the year 2004 also it is made only using html css javascript, i will do more projects in future for now connect with me...</a></div>
                </div >
            </div >
            <br />
            <div className="flex justify-center text-sm">
                <p className=" font-bold text-gray-400">MoviesJournal - 2025<i className="fa-solid fa-copyright"></i></p>
            </div >
        </div >
    </>
}

export default Footer;