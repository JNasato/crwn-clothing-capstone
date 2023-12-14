import { render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPES } from "../button.component";

describe("button tests", () => {
  // The hover state is being triggered when rendering the button
  test("should render base button when nothing is passed", () => {
    render(<Button />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: white");
  });

  test("should render google button when passed google button type", () => {
    render(<Button buttonType={BUTTON_TYPES.google} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: #357ae8");
  });

  test("should render inverted button when passed inverted button type", () => {
    render(<Button buttonType={BUTTON_TYPES.inverted} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: black");
  });

  test("should be disabled if isLoading", () => {
    render(<Button isLoading={true} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });
});
