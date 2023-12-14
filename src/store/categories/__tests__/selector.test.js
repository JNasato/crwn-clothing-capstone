import { selectCategories, selectCategoriesMap } from "../categories.selector";

const mockState = {
  categories: {
    categories: [
      {
        title: "womens",
        imageUrl: "test",
        items: [
          { id: 1, name: "Product 1" },
          { id: 2, name: "Product 2" },
        ],
      },
      {
        title: "mens",
        imageUrl: "test",
        items: [
          { id: 3, name: "Product 3" },
          { id: 4, name: "Product 4" },
        ],
      },
    ],
  },
};

describe("Categories selectors tests", () => {
  test("selectCategories should return categoriesData", () => {
    const categoriesSlice = selectCategories(mockState);
    expect(categoriesSlice).toEqual(mockState.categories.categories);
  });

  test("selectCategoriesMap should convert items array into the appropriate map", () => {
    const expectedCategoriesMap = {
      womens: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
      ],
      mens: [
        { id: 3, name: "Product 3" },
        { id: 4, name: "Product 4" },
      ],
    };

    const categoriesMap = selectCategoriesMap(mockState);
    expect(categoriesMap).toEqual(expectedCategoriesMap);
  });
});
