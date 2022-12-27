import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSketch } from 'react-icons/fa';
import { faSearch, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { authActions } from "../../store/auth-slice";
import { useDispatch, useSelector } from "react-redux";
const Navigation = () => {

  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

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
      <NavLink to="/login">Giriş yap</NavLink>
      {isAuth && <NavLink to="/profile">Profil</NavLink>}
      <button onClick={logoutHandler}>Logout</button>
      <div className="basket">
      <NavLink to="/basket"><FontAwesomeIcon icon={faBasketShopping}></FontAwesomeIcon></NavLink>
      <span>{cartQuantity}</span>
      </div>
    </nav>
    </div>
  );
};

export default Navigation;
