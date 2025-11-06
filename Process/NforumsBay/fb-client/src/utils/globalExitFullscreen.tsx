import { useEffect } from "react";

export default function GlobalEscExitFullscreen() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (document.fullscreenElement) {
          document.exitFullscreen()
            .then(() => console.log("Exited fullscreen"))
            .catch((err) => console.error("Error exiting fullscreen:", err));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}