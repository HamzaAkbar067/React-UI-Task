import { ALL } from '../../../../constant';
import { CategorySelection } from '../category_selection';
import { BrandSelection } from '../brand_selection';
import { BaseFilterProps } from '../types';
import './filter_container.sass';

function FilterContainer(props: BaseFilterProps) {
  const { setBrand, brand, setCategory, category } = props;

  return (
    <section className="filter-cont__filter">
      <div className="filter-div">
        <CategorySelection
          category={category}
          setBrand={setBrand}
          setCategory={setCategory}
        />
        <BrandSelection brand={brand} category={category} setBrand={setBrand} />
      </div>
      <div className="filter-cont__description">
        {brand !== ALL && (
          <div className="tag">
            <h1 className="tag__text text-md medium">Product Brand: {brand}</h1>
            <button
              title="Remove Brand"
              className="button-close"
              onClick={() => setBrand(ALL)}
            >
              x
            </button>
          </div>
        )}
        {category !== ALL && (
          <div className="tag">
            <h1>Product Category: {category}</h1>
            <button
              title="Remove Category"
              className="button-close"
              onClick={() => setCategory && setCategory(ALL)}
            >
              x
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FilterContainer;
