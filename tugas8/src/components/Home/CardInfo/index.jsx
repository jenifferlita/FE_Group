import Evolution from "./Evolution";
import Logo from "./Logo";
const CardInfo=({title}) => {

  return (
    <>
      {title}
      <Evolution />
      <Logo title = "Logo"/>
    </>
  );
}
export default CardInfo;

