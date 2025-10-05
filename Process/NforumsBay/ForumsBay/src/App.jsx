import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EnterAdminName from "./components/auth/anonymousEnter";
import axios from "axios";


const App = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const startAdmin = () => {
    navigate("auth");
  };

  return (
    <div className="flex flex-col gap-6 bg-black items-center justify-center min-h-screen text-center px-4">

      {/* App Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-violet-600 drop-shadow-lg">
        forumsBay
      </h1>

      {/* Greeting */}
      <p className="text-lg text-amber-500">
        Greetings, <span className="font-semibold">Guest</span>
      </p>

      {/* Subtitle */}
      <p className="text-blue-100 text-sm md:text-base">
        Choose your path to continue
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button
          className="bg-red-900 px-6 py-3 rounded-3xl text-yellow-300 font-semibold hover:bg-red-800 transition"
          onClick={() => setShowForm(true)}
        >
          Anonymous
        </button>

        <button
          className="bg-red-900 px-6 py-3 rounded-3xl text-yellow-300 font-semibold hover:bg-red-800 transition"
          onClick={startAdmin}
        >
          Admin
        </button>
      </div>

      {/* Conditional Form */}
      {showForm && (
        <div className="mt-6 w-full max-w-md">
          <EnterAdminName />
        </div>
      )}
    </div>
  );
};

export default App;
