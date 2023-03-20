// import SHOP_DATA from "../../shop-data.json";

import { CategoriesContext } from "../../context/categories.context";
import { useContext } from "react";
import "./categoryies-preview.styles.scss";
import CategoryPreview from "../../components/catgegory-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return Object.keys(categoriesMap).map((title) => {
    return (
      <CategoryPreview
        products={categoriesMap[title]}
        title={title}
        preview={true}
        key={title}
      />
    );
  });
};

export default CategoriesPreview;
