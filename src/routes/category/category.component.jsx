import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/catgegory-preview/category-preview.component";

const Category = () => {
  const { category } = useParams();
  const [categoryProducts, setCategory] = useState([]);
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(category);
  useEffect(() => {
    setCategory(categoriesMap[category]);
  }, [category, categoriesMap]);

  if (categoryProducts && categoryProducts.length === 0) {
    return <h1>Loading</h1>;
  } else {
    return (
      <CategoryPreview
        products={categoryProducts}
        title={category}
        preview={false}
      />
    );
  }
};

export default Category;
