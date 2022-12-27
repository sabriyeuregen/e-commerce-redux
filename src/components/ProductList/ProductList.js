import DATA from "../../DATA/data.json";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";
const ProductList = (props) => {


  const productList = DATA.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
    />
  ));

  return <div className="productlist">{productList}</div>;
};

export default ProductList;
