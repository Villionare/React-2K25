import { Route, Router, Routes } from "react-router-dom";
import Fixed from "./Confidence/FixedLayout";
import Home from "./Confidence/Home";
import LoadingSpinner from "./components/LoadingSpinner/Loading";

const App = () => {

  return <>
    <LoadingSpinner />
    {/* <Routes>
      <Route path={'/'} element={<Fixed />} > 
        <Route index path={'home'} element={<Home />} />

      </Route>
    </Routes> */}
  </>
}

export default App;