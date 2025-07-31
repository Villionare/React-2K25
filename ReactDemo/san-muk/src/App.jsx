import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";

const App = () => {
  return (
    <>
      <Header />
      <div className="border-1 bg-gray-300">
        <Section />
        {/* <Aside /> */}
      </div>
    </>
  );
};

export default App;
