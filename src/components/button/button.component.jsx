// import "./button.styles.scss";

import {
  BasedButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTOON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTOON_TYPE_CLASSES.base) => {
  return {
    [BUTOON_TYPE_CLASSES.base]: BasedButton,
    [BUTOON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTOON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType];
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
