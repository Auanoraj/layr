import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDetails from "../components/ProductDetails";
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

let originalFetch;

beforeEach(() => {
  originalFetch = global.fetch;
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          value: "Testing something!",
        }),
    })
  );
});

afterEach(() => {
  global.fetch = originalFetch;
});

describe("Product Details Page Tests", () => {
  it("Check the details of product", () => {
    const { getByTestId, getByText } = render(
      <ProductDataContextProvider
        value={{ productDetails: testData, handleProductDetails: jest.mock() }}
      >
        <MemoryRouter initialEntries={["/"]}>
          <ProductDetails />
        </MemoryRouter>
      </ProductDataContextProvider>
    );

    const prodDetailsId = getByTestId("product-details");
    const backBtn = getByText("← Back To Catalog");

    fireEvent.click(backBtn);

    expect(prodDetailsId).toBeInTheDocument();
  });
});
