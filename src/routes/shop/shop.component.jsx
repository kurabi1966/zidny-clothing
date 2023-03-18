// import SHOP_DATA from "../../shop-data.json";

import { ProductsContext } from "../../context/products.context";
import { useContext } from "react";
import ProductCard from "../../components/product-card/products-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.length > 0 ? (
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Shop;
