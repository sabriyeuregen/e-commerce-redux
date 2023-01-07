import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSketch } from "react-icons/fa";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { authActions } from "../../store/auth-slice";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const cartLength = cartQuantity.length;

  return (
    <div className="navigation">
      <div className="navigation__logo">
        <FaSketch className="navigation__logo-icon" />
        <h2>diamond store</h2>
      </div>
      <nav className="nav">
        <NavLink to="/">Anasayfa</NavLink>
        <NavLink to="/products">Ürünler</NavLink>
        {!isAuth && <NavLink to="/login">Giriş yap</NavLink>}
        {isAuth && <NavLink to="/profile">Profil</NavLink>}
        <div className="nav__basket">
          <NavLink to="/basket">
            <FontAwesomeIcon icon={faBasketShopping} className="nav__basket-icon"></FontAwesomeIcon>
          </NavLink>
         {cartLength >0 && <span>{cartQuantity}</span>} 
        </div>
       {isAuth && <button className="nav-button" onClick={logoutHandler}>
          Çıkış yap
        </button> }
      </nav>
    </div>
  );
};

export default Navigation;
