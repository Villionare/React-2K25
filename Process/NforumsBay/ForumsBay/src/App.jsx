import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import EnterAdminName from "./components/auth/anonymousEnter";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  const startAdmin = () => {
    navigate('auth');
  }



  return <>
    <div className="flex flex-col gap-3 bg-black items-center justify-center min-h-screen">
      <div className="">
        <p className="text-5xl text-violet-700">
          forumsBay
        </p>
      </div>
      <div>
        <p className="text-amber-800">
          Gereetings, ip
        </p>
      </div>
      <div>
        <p className="text-blue-50">
          Choose Yourself
        </p>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <button className="bg-red-900 p-3 text-yellow-300 cursor-pointer rounded-3xl min-w-sm" onClick={() => setShowForm(true)}>
          anonymous
        </button>
        <button className="bg-red-900 p-3 text-yellow-300 cursor-pointer rounded-3xl min-w-sm" onClick={e => startAdmin(e)}>admin</button>
      </div>
      {
        showForm ?
          <EnterAdminName /> :
          null
      }
    </div>
  </>
}

export default App;