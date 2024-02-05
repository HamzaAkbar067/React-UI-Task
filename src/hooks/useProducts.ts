import { useEffect, useState } from 'react';
import { ApiResponse } from '../models';
import { getProducts } from '../services';

function useProducts(reload: boolean) {
  const [productsData, setProductsData] = useState<ApiResponse>({ products: [], total: 0 });
  const [isLoanding, setIsLoanding] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoanding(true)
    getProducts()
      .then((resProducts) => {
        setProductsData(resProducts)
        setIsLoanding(false)
        console.info("sdfksnmlfksdnm");
      })
      .catch((e) => {
        console.log('error', e)
        setIsError(true)
        setIsLoanding(false)
      })
  }, [reload]);

  return { productsData, isLoanding, isError };
}

export default useProducts;
