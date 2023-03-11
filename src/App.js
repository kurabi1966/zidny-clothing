import { Routes, Route } from "react-router-dom";

// Application routes
import Nvaigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import About from "./routes/about/about.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nvaigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="about" element={<About />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
