import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import Category from "../category.component";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ category: "womens" }),
}));

describe("Category tests", () => {
  test("it should render a Spinner if categories have not loaded", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          categories: [],
        },
      },
    });

    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("it should render products if there are items present ", () => {
    const mockCategories = [
      {
        title: "Womens",
        items: [
          { id: 1, name: "Product 1" },
          { id: 2, name: "Product 2" },
        ],
      },
    ];

    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          categories: mockCategories,
        },
      },
    });

    const spinnerElement = screen.queryByTestId("spinner");
    expect(spinnerElement).toBeNull();

    const productElement = screen.getByText(/product 1/i);
    expect(productElement).toBeInTheDocument();
  });
});
