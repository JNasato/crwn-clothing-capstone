import { ButtonHTMLAttributes, FC } from "react";
import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
  ButtonSpinner,
} from "./button.styles";

export enum BUTTON_TYPES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

const getButton = (buttonType = BUTTON_TYPES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.inverted]: InvertedButton,
    [BUTTON_TYPES.google]: GoogleSignInButton,
  }[buttonType]);

export type ButtonsProps = {
  buttonType?: BUTTON_TYPES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonsProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
