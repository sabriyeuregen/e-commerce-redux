import { useSelector } from "react-redux";
import BasketCardItem from "./BasketCardItem";

const ShoppingBasket = () => {
  const basketItems = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const basketProductList = basketItems.map((item) => (
    <BasketCardItem
      key={item.id}
      item={{
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        total: item.totalPrice,
        price: item.price,
      }}
    />
  ));

  const checkItem = cartQuantity === 0 && (
    <h2>Sepetiniz boş!</h2>
  );

  return (
    <div className="basketlist">
      {checkItem}
      {basketProductList}
    </div>
  );
};

export default ShoppingBasket;
