import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "../components/ProductCard";
import { ProductDataContextProvider } from "../contexts/ProductDataContext";
import { MemoryRouter } from "react-router-dom";

const testData = [
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];

describe("Product Card Tests", () => {
  it("Check the render of cards", () => {
    const { getByTestId, getByText } = render(
      <ProductDataContextProvider
        value={{ productDetails: testData, handleProductDetails: jest.mock() }}
      >
        <MemoryRouter initialEntries={["/"]}>
          <ProductCard cardData={testData} />
        </MemoryRouter>
      </ProductDataContextProvider>
    );

    const prodCardId = getByTestId("product-card");
    expect(prodCardId).toBeInTheDocument();

    const prodDetailsViewBtn = getByText("View Details");

    fireEvent.click(prodDetailsViewBtn);
  });
});
