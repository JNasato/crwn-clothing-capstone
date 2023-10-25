import { useState } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  const [renderSignUpForm, setRenderSignUpForm] = useState(false);

  return (
    <div className="authentication-container">
      <div>
        {renderSignUpForm ? <SignUpForm /> : <SignInForm />}
        <button
          className="toggle-auth-type-button"
          onClick={() => setRenderSignUpForm(!renderSignUpForm)}
        >
          {renderSignUpForm
            ? "I already have an account"
            : "I do not have an account"}
        </button>
      </div>
    </div>
  );
};

export default Authentication;
