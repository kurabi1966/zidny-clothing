// import Categories from "./components/categories/categories.component";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
    {
      id: 6,
      title: "Accessories",
      imageUrl:
        "https://www.shutterstock.com/shutterstock/photos/1532053424/display_1500/stock-photo-fashion-women-stylish-accessories-outfit-glamour-set-with-label-flat-lay-beige-pastel-background-1532053424.jpg",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
