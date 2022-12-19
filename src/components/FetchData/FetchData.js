import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import ProductCard from "../ProductCard/ProductCard";
const FetchData = () => {
  const responseHandler = (response) => response;

  const { data, isLoading, hasError, sendRequest } = useHttp(responseHandler);

  useEffect(() => {
    sendRequest("https://ecom-1bba3-default-rtdb.firebaseio.com/products.json");
  }, []);

 const productList = data.map((product) => <ProductCard name={product.name} price={product.price} />)


  return (
    <div>
      <h1>Data One Component</h1>
      Error: {hasError}
      <br />
      IsLoading: {isLoading}
      <br />
      {JSON.stringify(data)}
      {productList}
    </div>
  );
};

export default FetchData;
