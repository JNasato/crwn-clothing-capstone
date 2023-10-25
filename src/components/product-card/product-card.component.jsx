import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img
        src={
          "https://www.thesun.co.uk/wp-content/uploads/2018/01/nintchdbpict000289224883.jpg"
        }
        alt={`${name}`}
      />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;
