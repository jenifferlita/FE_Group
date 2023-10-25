import Generations from "./Generation";
import Logo from "./Logo/Index";
const Header = ({ title }) => {
  return (
    <>
      {title}
      <Generations title="Genarations" />
      <Logo title="Logo" />
    </>
  );
};
export default Header;
