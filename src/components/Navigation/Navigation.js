import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Navigation = () => {
  return (
    <div className="navigation">
      <div class="search-box">
      <input class="search-input" type="text" placeholder="Search something.."/>
      <button class="search-btn"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
      </div>
      <nav>
      <NavLink to="/">Anasayfa</NavLink>
      <NavLink to="/">Kategoriler</NavLink>
      <NavLink to="/">Kayıt Ol</NavLink>
      <NavLink>Giriş yap</NavLink>
      <NavLink>Profile</NavLink>
    </nav>
    </div>
  );
};

export default Navigation;
