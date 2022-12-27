import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const BasketItem = (props) => {
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
    <div>
      <div>{title}</div>
      <div>
        {total} <span>{price}/item)</span>
      </div>
      <div>{quantity}</div>
      <div>{total}</div>
      <div>{price}</div>
      <div>{id}</div>
      <div>
        <button onClick={removeItemHandler}>-</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </div>
  );
};

export default BasketItem;
