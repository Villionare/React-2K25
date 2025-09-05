import './Loading.css'

const Loading = () => {

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-5 bg-black text-white text-2xl">
            <div className="flex">
                <div className="logo-container">
                    <img src="favicon.png" className="w-[3rem]" alt="logo" />
                </div>
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            </div>
            <div>
                <p className='text-white'>Movies Makes us more Human</p>
            </div>
        </div>
    );
}

export default Loading;