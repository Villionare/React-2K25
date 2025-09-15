import { Routes, Route, Router } from "react-router-dom";
import { Test, Another } from "./test";

const bb = "this is good"

const App = () => {

  return <Routes>
    <Route path="/" element={<Test />} />
    <Route path="/another" element={<Another />} />
  </Routes>
}

export { App, bb };