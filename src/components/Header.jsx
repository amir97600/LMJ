import "../styles/Header.css";
import logo from "../assets/leaf.png";

const Header = () => {
  return (
    <div id="Header" className="Header">
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
      <h1 className="text-transparent bg-clip-text">La Maison jungle</h1>
    </div>
  );
};

export default Header;
