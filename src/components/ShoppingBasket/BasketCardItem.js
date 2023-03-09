import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "./BasketCardItem.scss";
const BasketCardItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <div className="basket">
      <header>
        <h3>{title}</h3>
        <div className="basket__price">
          ${total.toFixed(2)}{" "}
          <span className="basket__itemprice">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="basket__details">
        <div className="basket__quantity">
          x <span>{quantity}</span>
        </div>

        <div className="basket__actions">
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </div>
  );
};

export default BasketCardItem;
