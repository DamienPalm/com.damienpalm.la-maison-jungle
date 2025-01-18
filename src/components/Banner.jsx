import "../styles/Banner.css";
import logo from "../assets/logo.png";

function Banner() {
  const title = "La maison jungle";
  return (
    <div className="header__banner">
      <img src={logo} alt="la maison jungle" className="header__banner__logo" />
      <h1 className="header__banner__title">{title}</h1>
    </div>
  );
}

export default Banner;
