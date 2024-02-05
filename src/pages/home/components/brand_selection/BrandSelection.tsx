import { useProducts } from '../../../../hooks';
import { ALL } from '../../../../constant';

import './brand_selection.sass';
import { Product } from '../../../../models';
import { BaseFilterProps } from '../types';

function BrandSelection(props: BaseFilterProps) {
  const { setBrand, category, brand } = props;
  const { productsData } = useProducts(true);

  function getUniqueBrands(products: Product[]): string[] {
    const filterBrandsWithCategory =
      category === ALL
        ? products
        : products.filter((product) => product.category === category);

    const brandsSet = filterBrandsWithCategory.map((product) => product.brand);
    return [...new Set(brandsSet)];
  }

  const brands = getUniqueBrands(productsData.products);

  const renderDropdownOptions = () => {
    const filteredProducts = (category: string) =>
      productsData.products.filter((product) => product.brand === category);

    return brands.map((brand) => (
      <option key={brand} value={brand}>
        {`${brand} (${filteredProducts(brand).length} available)`}
      </option>
    ));
  };

  return (
    <div className="drop-down-div">
      <header className="modal__header"></header>
      <div className="select-layout">
        <label htmlFor="select-category" className="text-navy-500 text-lg">
          Brands (Total: {brands.length})
        </label>
        <select
          name="brand"
          id="select-brand"
          className="custom-select"
          value={brand}
          onChange={(el) => {
            setBrand(el.target.value);
          }}
        >
          <option value={ALL}>All</option>
          {renderDropdownOptions()}
        </select>
      </div>
    </div>
  );
}

export default BrandSelection;
