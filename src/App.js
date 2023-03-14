import { Routes, Route } from "react-router-dom";

// Application routes
import Nvaigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import ContactUs from "./routes/contact-us/contact-us.component";
import SignIn from "./routes/authentication/sign-in.component";
import SignUp from "./routes/authentication/sign-up.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nvaigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="contact" element={<ContactUs />}></Route>
        <Route path="sign-in" element=<SignIn />></Route>
        <Route path="sign-up" element=<SignUp />></Route>
      </Route>
    </Routes>
  );
};

export default App;
