import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header/Index";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Home title="Home" />
      <Header title="Header" />
      <Footer title="Footer" />
    </>
  );
};

export default App;
