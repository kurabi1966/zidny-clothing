import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { Navigate } from "react-router-dom";
import { AuthContainer } from "./authentication.styles";
const SignIn = () => {
  const { currentUser } = useContext(UserContext);
  if (currentUser !== null) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <AuthContainer>
        <SignInForm />
      </AuthContainer>
    );
  }
};

export default SignIn;
