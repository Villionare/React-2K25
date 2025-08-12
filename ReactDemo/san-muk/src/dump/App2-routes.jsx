import { Route, Router, Routes } from "react-router-dom";
import Universal from "./Layout/UniversalLayout";
import Home from "./Layout/HomePage/Home";
import Signup from "./Layout/signup/signup";
import Login from "./Layout/login/login";
import About from "./Layout/about/about";
import Contact from "./Layout/contact/contact";
import Services from "./Layout/services/services";
import Account from "./Layout/account/account";

const App = () => {

  return <>
    {/* <Universal /> */}
    <Routes>
      <Route path="/" element={<Universal />} >
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="about/contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  </>
}

export default App;