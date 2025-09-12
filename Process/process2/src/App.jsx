import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage";
import ThemeProvider from "./context/theme";

function App() {

  return <>
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </ThemeProvider>
  </>
}

export default App
