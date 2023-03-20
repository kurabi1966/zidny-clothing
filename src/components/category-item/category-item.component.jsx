import "./category-item.styles.scss";
import { useNavigate } from "react-router-dom";
const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();
  const shopNowHandler = () => {
    navigate(`/shop/${title.toLowerCase()}`);
  };
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h1>{title.toUpperCase()}</h1>
        <p onClick={shopNowHandler}>SHOP NOW</p>
      </div>
    </div>
  );
};

export default CategoryItem;
