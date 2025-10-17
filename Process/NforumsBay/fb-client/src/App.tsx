import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EnterAnonymousName from "./components/auth/anonymousEnter";
import useSessionContext from "./context/useContext";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const { user } = useSessionContext();
  const [isLogout, setIsLogout] = useState(false);
  const navigate = useNavigate();

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

  const startAdmin = () => {
    navigate("auth");
    console.log("Navigating to Admin Auth...");
  };

  return (
    <div className="flex flex-col gap-6 bg-[#1A1C1E] items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl md:text-6xl text-[#EAE4D9] border-b-4 border-[#424549] pb-2 font-serif tracking-tight">
        forumsBay
      </h1>

      <p className="text-lg text-[#EAE4D9]">
        Greetings, <span className="font-bold">Guest</span>
      </p>

      <p className="text-[#A9A296] text-sm md:text-base italic">
        Choose your path to continue the <strong>Midnight Edition</strong> experience.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button
          className="bg-[#5CA0D3] px-8 py-3 rounded-md text-[#EAE4D9] font-bold hover:bg-[#8BCFF2] transition shadow-lg text-lg"
          onClick={() => setShowForm(true)}
        >
          Anonymous Access
        </button>

        <button
          className="bg-[#5CA0D3] px-8 py-3 rounded-md text-[#EAE4D9] font-bold hover:bg-[#8BCFF2] transition shadow-lg text-lg"
          onClick={startAdmin}
        >
          Admin Portal
        </button>
      </div>

      {/* Conditional Form */}
      {showForm && (
        <div className="mt-6 w-full max-w-md bg-[#232527] p-6 rounded-lg border border-[#424549]">
          <p className="text-[#EAE4D9]">Anonymous Name Entry Form goes here...</p>
          <EnterAnonymousName />
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
