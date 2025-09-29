const Background = () => {

    return <div className="fixed z-[2] w-full h-screen">
        <div className="absolute top-[5%] text-zinc-600 text-xl flex justify-center py-5 w-full">
            documents/
        </div>
        <p className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[9rem] leading-none tracking-tighter text-zinc-900 font-semibold">
            DOCS
        </p>
    </div>
}

export default Background;