import { Router, RouterProvider } from "react-router-dom"
import Background from "./components/background";
import Foreground from "./components/foreground";

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <App/>
  //   },
  // ]);

  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground />
    </div>
  )
}

export default App
