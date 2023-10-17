import './App.css'
import Home from './components/Home'
import Search from './components/Home/Search'
import CardInfo from './components/CardInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <CardInfo/>
    <Search/>
    </>
  )
}

export default App
