import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import TodaApp from "./components/UseReducer&useState_project";
import ReducerComponent from "./components/useReducer/useReducer";
import Todo from "./todoApp/components";
import Dialog from "./todoApp/components/Dialog";

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
      <Todo />
    </>
  );
};

export default App;
