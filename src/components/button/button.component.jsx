import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
} from "./button.styles";

export const BUTTON_TYPES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES.base) =>
  ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.inverted]: InvertedButton,
    [BUTTON_TYPES.google]: GoogleSignInButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
