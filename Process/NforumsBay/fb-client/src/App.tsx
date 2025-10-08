import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EnterAdminName from "./components/auth/anonymousEnter";
// import { useNavigate } from "react-router-dom"; // Commented out to prevent compilation error in single-file environment
// import EnterAdminName from "./components/auth/anonymousEnter.js"; // Commented out to prevent compilation error

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate(); // Commented out

  const startAdmin = () => {
    navigate("auth"); // Placeholder for navigation
    console.log("Navigating to Admin Auth...");
  };

  // --- Midnight Edition Color Palette Usage ---
  // Base Background: Deep Inkwell (#1A1C1E)
  // Primary Text/Titles: Aged Paper White (#EAE4D9)
  // Secondary Text/Subtitles: Faded Newsprint (#A9A296)
  // Button BG: Journalist's Blue (#5CA0D3)
  // Button Hover: Pressed Ink Blue (#8BCFF2)
  // Alert Accent (for subtitle): Headline Alert Red (#E56E74)
  // Divider: Column Rule (#424549)


  return (
    // Main Background: Deep Inkwell (#1A1C1E)
    <div className="flex flex-col gap-6 bg-[#1A1C1E] items-center justify-center min-h-screen text-center px-4">

      {/* App Title */}
      {/* Primary Text: Aged Paper White (#EAE4D9) */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#EAE4D9] border-b-4 border-[#424549] pb-2 font-serif tracking-tight">
        forumsBay
      </h1>

      {/* Greeting */}
      {/* Primary Text: Aged Paper White (#EAE4D9) */}
      <p className="text-lg text-[#EAE4D9]">
        Greetings, <span className="font-bold">Guest</span>
      </p>

      {/* Subtitle */}
      {/* Secondary Text: Faded Newsprint (#A9A296) */}
      <p className="text-[#A9A296] text-sm md:text-base italic">
        Choose your path to continue the **Midnight Edition** experience.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button
          // Button BG: Journalist's Blue (#5CA0D3), Hover: Pressed Ink Blue (#8BCFF2), Text: Aged Paper White
          className="bg-[#5CA0D3] px-8 py-3 rounded-md text-[#EAE4D9] font-bold hover:bg-[#8BCFF2] transition shadow-lg text-lg"
          onClick={() => setShowForm(true)}
        >
          Anonymous Access
        </button>

        <button
          // Button BG: Journalist's Blue (#5CA0D3), Hover: Pressed Ink Blue (#8BCFF2), Text: Aged Paper White
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
          <EnterAdminName />
        </div>
      )}
    </div>
  );
};

export default App;
