import "./ProductCard.scss";
const ProductCard = (props) => {
  return (
    <div className="productcard">
      <div className="productcard__name">{props.name}</div>
      <div className="productcard__price">{props.price}</div>
      <div className="productcard__image">{props.image}</div>
      <div className="productcard__button">{props.button}</div>
    </div>
  );
};

export default ProductCard;
