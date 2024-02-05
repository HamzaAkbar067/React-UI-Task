import { useCategories } from '../../../../hooks';
import { useProducts } from '../../../../hooks';
import { BaseFilterProps } from '../types';
import { ALL } from '../../../../constant';
import './category_selection.sass';

function CategorySelection(props: BaseFilterProps) {
  const { setCategory, setBrand, category } = props;
  const { categories } = useCategories(true);
  const { productsData } = useProducts(true);

  const filteredProducts = (category: string) =>
    productsData.products.filter((product) => product.category === category);

  const renderDropdownOptions = () => {
    return categories.map((category) => (
      <option key={category} value={category}>
        {`${category} (${filteredProducts(category).length} available)`}
      </option>
    ));
  };

  return (
    <div className="drop-down-div">
      <div className="select-layout">
        <label htmlFor="select-category" className="text-navy-500 text-lg">
          Categories (Total: {categories.length})
        </label>
        <select
          name="category"
          id="select-category"
          className="custom-select"
          value={category}
          onChange={(e) => {
            setCategory && setCategory(e.target.value);
            setBrand(ALL);
          }}
        >
          <option value={ALL}>All</option>
          {renderDropdownOptions()}
        </select>
      </div>
    </div>
  );
}

export default CategorySelection;
