import "./ProductCard.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const ProductCard = (props) => {
  const dispatch = useDispatch();

  const { title, price, id } = props;

  const addToBasketHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <div className="productcard">
      <div className="productcard__title">{props.title}</div>
      <div className="productcard__price">{props.price}</div>
      <div className="productcard__image">{props.image}</div>
      <div className="productcard__button">
        {<button onClick={addToBasketHandler}>Add To Basket</button>}
      </div>
    </div>
  );
};

export default ProductCard;
