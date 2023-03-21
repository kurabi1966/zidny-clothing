import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/product-card/products-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ products, title, preview }) => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate(`${title.toLowerCase()}`);
  };
  const navigateToShop = () => {
    navigate("/shop");
  };
  if (!products || products.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="category-preview-container" key={title}>
      {preview === true ? (
        <span onClick={navigateTo} className="title">
          <h2 className="category-title">{title.toUpperCase()}</h2>
        </span>
      ) : (
        <span>
          <h2 className="category-title">
            <span onClick={navigateToShop} className="title">
              {"Shop >>"}
            </span>{" "}
            {title.toUpperCase()}
          </h2>
        </span>
      )}

      <div className="products-container">
        {products.slice(0, preview ? 4 : products.length).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
