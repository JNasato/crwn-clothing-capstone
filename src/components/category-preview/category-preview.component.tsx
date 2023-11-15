import { CategoryItem } from "../../store/categories/categories.types";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Preview,
  TitleLink,
} from "./category-preview.styles";

interface IProps {
  title: string;
  products: CategoryItem[];
}

const CategoryPreview = ({ title, products }: IProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      </h2>

      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
