import { categoriesReducer, setCategories } from "../categories.reducer";

describe("Categories reducer tests", () => {
  test("setCategories", () => {
    const mockData = [
      {
        title: "womens",
        imageUrl: "test",
        items: [
          { id: 1, name: "Product 1" },
          { id: 2, name: "Product 2" },
        ],
      },
    ];

    const expectedState = { categories: mockData };

    expect(
      categoriesReducer({ categories: [] }, setCategories(mockData))
    ).toEqual(expectedState);
  });
});
