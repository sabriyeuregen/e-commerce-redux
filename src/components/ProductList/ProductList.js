import DATA from "../../DATA/data.json";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const ProductList = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToBasketHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  const productList = DATA.map((food) => (
    <ProductCard
      key={food.id}
      id={food.id}
      name={food.name}
      price={food.price}
      button={<button onClick={addToBasketHandler}>Add To Basket</button>}
    />
  ));

  return <div className="productlist">{productList}</div>;
};

export default ProductList;
