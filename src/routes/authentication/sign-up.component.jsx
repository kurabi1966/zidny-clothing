import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { Navigate } from "react-router-dom";
import { AuthContainer } from "./authentication.styles";

const SignUp = () => {
  const { currentUser } = useContext(UserContext);
  if (currentUser !== null) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <AuthContainer>
        <SignUpForm />
      </AuthContainer>
    );
  }
};

export default SignUp;
