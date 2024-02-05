import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useProducts } from '../../../../hooks';
import { ProductCard } from '../product_cart';
import { FilterContainer } from '..';
import { ALL } from '../../../../constant';
import './products_container.sass';

interface ProductsContainerProps {
  reload: boolean
  setReload: Dispatch<SetStateAction<boolean>>
};


function ProductsContainer(props:ProductsContainerProps) {
  const {reload, setReload} = props;
  const [brand, setBrand] = useState<string>(ALL);
  const [category, setCategory] = useState<string>(ALL);
  const [reloadCount, setReloadCount] = useState<number>(0);
  const { productsData, isLoanding, isError } = useProducts(reload);
  const { products } = productsData;

  const handleClearFilters = () => {
    setBrand(ALL);
    setCategory(ALL);
  };

  const filteredProducts = products.filter((product) => {
    const brandMatch =
      brand === ALL || product.brand.toLowerCase() === brand.toLowerCase();
    const categoryMatch =
      category === ALL ||
      product.category.toLowerCase() === category.toLowerCase();
    return brandMatch && categoryMatch;
  });

  useEffect(() => {
      const timer = setTimeout(() => {
        setReload(!reload);
        setReloadCount((prevCount) => prevCount + 1);
      }, 60000);

      return () => clearTimeout(timer);
  }, [reload, reloadCount]);

  // only show autometic reloads count in console: does nothing
  useEffect(() => {
      console.log('Autometic Reload count:', reloadCount);
  }, [reloadCount]);

  return (
      <>
        <section className="filter-cont">
          <span className="heading text-navy-500">
            Products (Total: {filteredProducts.length})
          </span>
          {(category !== ALL || brand !== ALL) &&
            <div>
              <button
                title="ClearFilters"
                type="button"
                onClick={handleClearFilters}
                className="button-normal"
              >
                ClearFilters
              </button>
            </div>
          }
        </section>
        <FilterContainer
          category={category}
          setCategory={setCategory}
          brand={brand}
          setBrand={setBrand}
        />
        {isLoanding && !isError && (
          <div className="center">
            <span className="loader"></span>
          </div>
        )}
        {isError && !isLoanding && (
          <div className="center">
            <h1 className="title-text font-primary">Connection error</h1>
          </div>
        )}
        {!isError && !isLoanding && products.length === 0 && (
          <div className="center">
            <h1 className="title-text font-primary">No results found</h1>
          </div>
        )}
        {!isError && !isLoanding && products.length !== 0 && (
          <section className="products-cont">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        )}
      </> 
  );
}

export default ProductsContainer;
