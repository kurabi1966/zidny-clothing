import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const { currentUser } = useContext(UserContext);
  if (currentUser !== null) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div className="auth-container">
        <SignInForm />
      </div>
    );
  }
};

export default SignIn;
