import { createContext, useEffect, useState } from "react";
// import SHOP_DATA from "../shop-data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategories] = useState({});
  useEffect(() => {
    async function featchData() {
      const categories = await getCategoriesAndDocuments("categories");
      setCategories(categories);
    }
    featchData();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
