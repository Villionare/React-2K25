import Boards from "../boards/boards.js";
import Posts from "../posts/posts.js";
import Threads from "../threads/threads.js";

const Home = () => {

    return <div className="flex">
        <Boards />
        <Threads />
        <Posts />
    </div>
}

export default Home;