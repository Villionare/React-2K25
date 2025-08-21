const Categories = () => {

    return <>
        <div className="mt-5" id="categories">
            <h1 className="text-center font-bold text-white text-5xl mb-5 sm:mt-0 ">
                Categories
            </h1>
        </div>

        <div className="flex flex-col justify-center items-center p-0 mx-7 mb-5">

            {/* category boxes */}
            <div className="flex flex-col w-full gap-10 md:flex-row md:gap-3">

                <div className="relative bg-blue-500 h-50 rounded-2xl md:flex-1/4">
                    <span className="text-white font-bold absolute top-2 left-2">
                        ACTION
                    </span>
                </div>
                <div className="relative bg-blue-500 h-50 rounded-2xl md:flex-1/4">
                    <span className="text-white font-bold absolute top-2 left-2">
                        COMEDY
                    </span>
                </div>
                <div className="relative bg-blue-500 h-50 rounded-2xl md:flex-1/4">
                    <span className="text-white font-bold absolute top-2 left-2">
                        ANIME
                    </span>
                </div>
                <div className="relative bg-blue-500 h-50 rounded-2xl md:flex-1/4">
                    <span className="text-white font-bold absolute top-2 left-2">
                        THRILLER
                    </span>
                </div>
            </div>

            <div className="flex flex-col w-full gap-10 mt-10 md:flex-row md:gap-3">

                <div className="relative bg-blue-500 h-50 rounded-2xl md:flex-1/4">
                    <span className="text-white font-bold absolute top-2 left-2">
                        ADVENTURE
                    </span>
                </div>
                <div className="relative bg-blue-500 h-50 rounded-2xl md:flex-1/4">
                    <span className="text-white font-bold absolute top-2 left-2">
                        DRAMA
                    </span>
                </div>
                <div className="relative bg-blue-500 h-50 rounded-2xl md:flex-1/4">
                    <span className="text-white font-bold absolute top-2 left-2">
                        ROMANCE
                    </span>
                </div>
                <div className="relative bg-blue-500 h-50 rounded-2xl md:flex-1/4">
                    <span className="text-white font-bold absolute top-2 left-2">
                        FANTASY
                    </span>
                </div>
            </div>

        </div>
    </>
}

export default Categories;