import { useState } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  AuthenticationContainer,
  ToggleAuthTypeButton,
} from "./authentication.styles";

const Authentication = () => {
  const [renderSignUpForm, setRenderSignUpForm] = useState(false);

  return (
    <AuthenticationContainer>
      <div>
        {renderSignUpForm ? <SignUpForm /> : <SignInForm />}
        <ToggleAuthTypeButton
          onClick={() => setRenderSignUpForm(!renderSignUpForm)}
        >
          {renderSignUpForm
            ? "I already have an account"
            : "I do not have an account"}
        </ToggleAuthTypeButton>
      </div>
    </AuthenticationContainer>
  );
};

export default Authentication;
