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

                <div className="relative h-52 rounded-2xl md:flex-1/4 overflow-hidden group">
                    {/* bg image */}
                    <div className="absolute inset-0 bg-[url('/categories/action.avif')] bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110"></div>

                    {/* overlay */}
                    <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

                    {/* text */}
                    <span className="text-white font-bold absolute top-2 left-2 z-1">ACTION</span>
                </div>
                <div className="relative h-52 rounded-2xl md:flex-1/4 overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/categories/comedy.avif')] bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-black/40 rounded-2xl transition-colors duration-500 ease-in-out group-hover:bg-black/50"></div>
                    <span className="text-white font-bold absolute top-2 left-2 z-1">COMEDY</span>
                </div>

                <div className="relative h-52 rounded-2xl md:flex-1/4 overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/categories/anime.jpeg')] bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-black/40 rounded-2xl transition-colors duration-500 ease-in-out group-hover:bg-black/50"></div>
                    <span className="text-white font-bold absolute top-2 left-2 z-1">ANIME</span>
                </div>

                <div className="relative h-52 rounded-2xl md:flex-1/4 overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/categories/thriller.jpg')] bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-black/40 rounded-2xl transition-colors duration-500 ease-in-out group-hover:bg-black/50"></div>
                    <span className="text-white font-bold absolute top-2 left-2 z-1">THRILLER</span>
                </div>

            </div>

            <div className="flex flex-col w-full gap-10 mt-10 md:flex-row md:gap-3">
                <div className="relative h-52 rounded-2xl md:flex-1/4 overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/categories/adventure.webp')] bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-black/40 rounded-2xl transition-colors duration-500 ease-in-out group-hover:bg-black/50"></div>
                    <span className="text-white font-bold absolute top-2 left-2 z-1">ADVENTURE</span>
                </div>

                <div className="relative h-52 rounded-2xl md:flex-1/4 overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/categories/drama.webp')] bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-black/40 rounded-2xl transition-colors duration-500 ease-in-out group-hover:bg-black/50"></div>
                    <span className="text-white font-bold absolute top-2 left-2 z-1">DRAMA</span>
                </div>

                <div className="relative h-52 rounded-2xl md:flex-1/4 overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/categories/romance.jpeg')] bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-black/40 rounded-2xl transition-colors duration-500 ease-in-out group-hover:bg-black/50"></div>
                    <span className="text-white font-bold absolute top-2 left-2 z-1">ROMANCE</span>
                </div>

                <div className="relative h-52 rounded-2xl md:flex-1/4 overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/categories/fantacy.avif')] bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-black/40 rounded-2xl transition-colors duration-500 ease-in-out group-hover:bg-black/50"></div>
                    <span className="text-white font-bold absolute top-2 left-2 z-1">FANTASY</span>
                </div>

            </div>



        </div>
    </>
}

export default Categories;