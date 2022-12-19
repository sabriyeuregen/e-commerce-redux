import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import ProductCard from "../ProductCard/ProductCard";
const FetchData = () => {
  const responseHandler = (response) => response;

  const { data, isLoading, hasError, sendRequest } = useHttp(responseHandler);

  useEffect(() => {
    sendRequest("https://fakestoreapi.com/products/category/women's clothing"); //kadın kıyafetleri için
  }, [sendRequest]);

  const productList = data.map((product) => (
    <ProductCard
      key={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
      image={
        <img
          src={product.image}
          alt="product"
          style={{ objectFit: "contain" }}
          width="200"
          height="300"
        />}
      button={<button>Add To Basket</button>}
      
    />
  ));

  console.log(data);
  return (
    <div>
      <h1>Data One Component</h1>
      Error: {hasError}
      <br />
      IsLoading: {isLoading}
      <br />
      {productList}
    </div>
  );
};

export default FetchData;
