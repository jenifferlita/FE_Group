import "./App.css";
import Home from "./components/Home";
import Search from "./components/Home/Search";
import CardInfo from "./components/CardInfo";
import Header from "./components/Header";
import Logo from "./components/Header/Logo";
import Generations from "./components/Header/Generation";
import Evolution from "./components/CardInfo/Evolution";
import TypeEffect from "./components/CardInfo/Type-Effect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <CardInfo />
      <Search />
      <Header />
      <Logo />
      <Generations />
      <Evolution/>
      <Type-Effect/>
    </>
  );
}

export default App;
