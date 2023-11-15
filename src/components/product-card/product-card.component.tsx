import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";
import Button, { BUTTON_TYPES } from "../button/button.component";
import { Footer, ProductCardContainer } from "./product-card.styles";
import { CategoryItem } from "../../store/categories/categories.types";

interface IProps {
  product: CategoryItem;
}

const ProductCard = ({ product }: IProps) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />

      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>

      <Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
