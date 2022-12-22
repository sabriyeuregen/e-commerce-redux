import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSketch } from 'react-icons/fa';
import { faSearch, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation__logo">
       <FaSketch className="navigation__logo-icon"/>
       <h2>diamond store</h2>
       </div>
      <div class="search-box">
      <input class="search-input" type="text" placeholder="Search something.."/>
      <button class="search-btn"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
      </div>
      <nav>
      <NavLink to="/">Anasayfa</NavLink>
      <NavLink to="/products">Ürünler</NavLink>
      <NavLink to="/">Kayıt Ol</NavLink>
      <NavLink>Giriş yap</NavLink>
      <NavLink>Profile</NavLink>
      <NavLink to="/basket"><FontAwesomeIcon icon={faBasketShopping}></FontAwesomeIcon></NavLink>
    </nav>
    </div>
  );
};

export default Navigation;
