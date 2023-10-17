import "./App.css";
import Home from "./components/Home";
import Search from "./components/Home/Search";
import CardInfo from "./components/CardInfo";
import Header from "./components/Header";
import Logo from "./components/Header/Logo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <CardInfo />
      <Search />
      <Header />
      <Logo />
    </>
  );
}

export default App;
