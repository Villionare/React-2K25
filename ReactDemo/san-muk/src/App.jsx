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

const App = () => {
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

      <UseOnlineStatus />
    </>
  );
};

export default App;
