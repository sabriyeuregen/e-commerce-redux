import "./ProductCard.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { useSelector } from "react-redux";
const ProductCard = (props) => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const { title, price, id } = props;

  const addToBasketHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price
      })
    );
  };

  return (
    <div className="productcard">
      <div className="productcard__image">{props.image}</div>
      <div className="productcard__title">{props.title}</div>
      <div className="productcard__bottom">
      <div className="productcard__bottom-price">{props.price}</div>
      {isAuth && <div className="productcard__bottom-button">
        {<button className="productcard__bottom-button" onClick={addToBasketHandler}>Sepete Ekle</button>}
      </div>}
      {!isAuth && <span>Sepete eklemek için giriş yapınız!</span>}
      </div>
    </div>
  );
};

export default ProductCard;
