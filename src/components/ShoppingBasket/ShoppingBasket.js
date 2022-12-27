import { useSelector } from "react-redux";
import BasketItem from "./BasketItem";
const ShoppingBasket = () => {
  const basketItems = useSelector((state) => state.cart.items);

 const basketProductList = basketItems.map((item) => (
    <BasketItem
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
   console.log(basketItems)
  return <div>{basketProductList}</div>;
};

export default ShoppingBasket;
