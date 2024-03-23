import React, { useContext, useEffect, useState } from "react";
import {
  CatalogContainer,
  CatalogLoaderContainer,
  ErrorContainer,
  FilterAndSortContainer,
  FilterContainer,
  SortContainer,
} from "../../styles/styled-components/home";
import ProductCard from "../ProductCard";
import { PageLayout } from "../../styles/styled-components/layout";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { DotLoader, Spinner } from "../../styles/Loaders";
import { ProductDataContext } from "../../contexts/ProductDataContext";

const sort = ["price", "name"];

const Home = () => {
  const [productCategories, setProductCategories] = useState(["all"]);
  const [productsData, setProductsData] = useState([]);
  const [productCountLimit, setProductCountLimit] = useState(6);
  const [sortType, setSortType] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [targetRef, isIntersecting] = useInfiniteScroll({ threshold: 0.5 });
  const searchTerm = useContext(ProductDataContext)?.productDetails || "";

  useEffect(() => {
    if (searchTerm) {
      let searchData = productsData.filter(({ title }) =>
        title.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      setProductsData([...searchData]);
    } else fetchAllProductsData();
  }, [searchTerm]);

  useEffect(() => fetchAllProductsData(), [productCountLimit]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setProductCategories([...productCategories, ...json]))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    // Restricting the api call with productList as 24, as the api doesn't provide details about total count of products
    if (
      isIntersecting &&
      productCountLimit < 24 &&
      !sortType &&
      categoryFilter === "all" &&
      !searchTerm
    ) {
      setProductCountLimit(() => productCountLimit + 6);
      setSortType("");
    } else setHasMore(false);
  }, [isIntersecting]);

  useEffect(() => {
    let result = productsData.sort((a, b) => {
      if (sortType === "name") return a.title.localeCompare(b.title);
      else return a[sortType] - b[sortType];
    });

    setProductsData([...result]);
  }, [sortType]);

  useEffect(() => {
    if (categoryFilter) {
      setSortType("");
      setIsLoading(true);

      if (categoryFilter === "all") fetchAllProductsData();
      else {
        fetch(`https://fakestoreapi.com/products/category/${categoryFilter}`)
          .then((res) => res.json())
          .then((json) => setProductsData([...json]))
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
      }
    }
  }, [categoryFilter]);

  const fetchAllProductsData = () => {
    fetch(`https://fakestoreapi.com/products?limit=${productCountLimit}`)
      .then((res) => res.json())
      .then((json) => setProductsData([...json]))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <PageLayout data-testid="home-page">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {productsData.length > 0 ? (
            <>
              <FilterAndSortContainer>
                <SortContainer>
                  Sort By:
                  {sort.length > 0 &&
                    sort.map((sortName) => (
                      <div
                        key={sortName}
                        onClick={() => setSortType(sortName)}
                        data-testid="sort-by"
                      >
                        <input
                          type="radio"
                          id={sortName}
                          name="sort_by"
                          value={sortName}
                          defaultChecked={sortName === sortType}
                        />
                        <label htmlFor={sortName}>{sortName}</label>
                      </div>
                    ))}
                </SortContainer>
                <FilterContainer>
                  Category Filters:
                  {productCategories.length > 0 &&
                    productCategories.map((catName) => (
                      <div
                        key={catName}
                        onClick={() => setCategoryFilter(catName)}
                      >
                        <input
                          type="radio"
                          id={catName}
                          name="category_filter"
                          value={catName}
                          defaultChecked={catName === categoryFilter}
                        />
                        <label htmlFor={catName}>{catName}</label>
                      </div>
                    ))}
                </FilterContainer>
              </FilterAndSortContainer>
              <CatalogContainer>
                {productsData?.map((productData) => (
                  <ProductCard key={productData.id} cardData={productData} />
                ))}
              </CatalogContainer>
            </>
          ) : (
            <ErrorContainer>Sorry, No Data Found.</ErrorContainer>
          )}
          <CatalogLoaderContainer ref={targetRef}>
            {hasMore && <DotLoader />}
          </CatalogLoaderContainer>
        </>
      )}
    </PageLayout>
  );
};

export default Home;
