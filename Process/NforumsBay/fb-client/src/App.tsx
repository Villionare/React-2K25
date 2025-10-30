import { useEffect, useState } from "react";
import EnterAnonymousName from "./components/auth/anonymousEnter";
import useSessionContext from "./context/useContext";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthComponent from "./components/auth";
import { useOutletContext } from "react-router-dom";
import type { Homedata } from "./Types/Homedata";


const App = () => {

  const homeData: Homedata = useOutletContext();
  const [showAnonForm, setshowAnonForm] = useState(false);
  const [showAdminForm, setshowAdminForm] = useState(false);
  const { user } = useSessionContext();
  const [isLogout, setIsLogout] = useState(false);

  useEffect(() => {
    if (user?.success && user?.logouted) {
      setIsLogout(true);
    }
  }, [user]);

  useEffect(() => {
    if (isLogout) {
      toast(user?.message || "You’ve been logged out!");
    }
  }, [isLogout, user]);

  return (
    <div className="flex flex-col gap-2 bg-black items-center justify-center min-h-screen">

      <h1 className="whitespace-pre text-sm font-mono text-white">

        ░▒▓████████▓▒░▒▓██████▓▒░░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓██████████████▓▒░ ░▒▓███████▓▒░▒▓███████▓▒░ ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░ <br />
        ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ <br />
        ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ <br />
        ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░░▒▓███████▓▒░░▒▓████████▓▒░░▒▓██████▓▒░  <br />
        ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░     <br />
        ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░     <br />
        ░▒▓█▓▒░      ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░     <br />

      </h1>

      <p className="text-lg text-[#EAE4D9] mt-10">

        Greetings, <span className="font-bold">{homeData ? homeData.ip : "Guest"}</span>
      </p>

      <p className="text-[#A9A296] text-sm md:text-base italic">
        Choose your path to continue the <strong>Midnight Edition</strong> experience.
      </p>

      {/* two buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="cursor-pointer border-2 border-white text-white p-4" onClick={() => { setshowAdminForm(false); setshowAnonForm((prev) => !prev) }}>
          {showAnonForm ? "close[X]" : "🥸 Anonymous Access"}
        </button>

        <button className="cursor-pointer border-2 border-white text-white p-4" onClick={() => { setshowAnonForm(false); setshowAdminForm((prev) => !prev) }}>
          {showAdminForm ? "close[X]" : "🛡️ Admin Access"}
        </button>
      </div>

      {/* Conditional Form */}
      {showAnonForm && (
        <div className="mt-6 w-full bg-black p-6 rounded-lg">
          <p className="text-[#EAE4D9]">Anonymous Name Entry Form goes here...</p>
          <EnterAnonymousName />
        </div>
      )}

      {showAdminForm && (
        <div className="mt-6 w-full bg-black p-6 rounded-lg">
          <AuthComponent />
        </div>
      )}


      <ToastContainer position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} />
    </div>
  );
};

export default App;
