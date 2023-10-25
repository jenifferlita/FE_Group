import CardInfo from "./CardInfo";
import Search from "./Search";

const Home=({title}) =>{
  return (
    <>
      {title}
      <CardInfo title = "Card Info"/>
      <Search title = "Search"/>
    </>
  );
}
export default Home;