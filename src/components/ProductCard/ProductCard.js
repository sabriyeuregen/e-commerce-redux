
const ProductCard = (props ) => {
  return (
    <div>
        {props.name}
        {props.price}
        {props.image}
        {props.button}
    </div>
  )
}

export default ProductCard