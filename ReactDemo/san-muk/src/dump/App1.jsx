import { Link, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import MainApp from "./common-form";
import CommonForm from "./common-form";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import TodaApp from "./components/UseReducer&useState_project";
import ReducerComponent from "./components/useReducer/useReducer";
import UseOnlineStatus from "./customHooks/useOnlineStatus";
import FormHandling from "./form";
import TesterForm from "./formtemp/Tester";
import Todo from "./todoApp/components";
import Dialog from "./todoApp/components/Dialog";
import UseRefComp from "./useRef/useRef";
import NotFound from "./Router_Dom/404notFound";
import Home from "./Router_Dom/home";
import Services from "./Router_Dom/services";
import Account from "./Router_Dom/account";
import Contact from "./Router_Dom/contact";
import About from "./Router_Dom/AboutUs";
import Persons from "./Router_Dom/Dynamic/Persons-list";

const App = () => {

  const toNavigate = useNavigate();

  return (
    <>
      {/* <Header />
      <div className="border-1 bg-gray-300">
        <Section />
        <Aside />
      </div> */}

      {/* <ReducerComponent /> */}

      {/* <TodaApp /> */}
      {/* <Todo /> */}

      {/* <FormHandling /> */}

      {/* <MainApp /> */}
      {/* <TesterForm /> */}
      {/* <UseRefComp /> */}

      <div>
        <p>useNavigate() in action here</p>
        <button onClick={() => { toNavigate("/about") }} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition duration-200 shadow-sm mx-2">About</button>
        <button onClick={() => { toNavigate("/services") }} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition duration-200 shadow-sm mx-2">Services</button>
        <button onClick={() => { toNavigate("/account") }} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition duration-200 shadow-sm mx-2">Account</button>
        <button onClick={() => { toNavigate("/about/contact") }} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition duration-200 shadow-sm mx-2">Contact</button>
      </div>
      <hr className="my-4" />
      <div className="m-4">
        <p className="m-5">link in action</p>
        <Link to={"/about"} className="p-3 m-4 bg-blue-400 rounded-md">About</Link >
        <Link to={"/services"} className="p-3 m-4 bg-blue-400 rounded-md">Services</Link >
        <Link to={"/account"} className="p-3 m-4 bg-blue-400 rounded-md">Account</Link >
        <Link to={"/about/contact"} className="p-3 m-4 bg-blue-400 rounded-md">Contact</Link>
      </div>
      <div>
        <p>Dynamic routing - 'for this we have to use : in the Route'  <br /> and to get the value from that dynamic route use will use useParams </p>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/account" element={<Account />} />
        <Route path="/persons" element={<Persons />} />
        <Route path="/persons/:id" element={<Persons />} />

        {/* nested routes */}
        <Route path="/about" element={<About />} >
          <Route index element={<Contact />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
