import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterContainer from './FilterContainer';
import { ALL } from '../../../../constant';

const mockBaseFilterProps = {
  setBrand: jest.fn(),
  brand: 'Test Brand',
  setCategory: jest.fn(),
  category: 'Test Category',
};

describe('FilterContainer component', () => {
  test('calls setBrand with ALL when remove brand button is clicked', () => {
    const { getByTitle } = render(<FilterContainer {...mockBaseFilterProps} />);
    const removeBrandButton = getByTitle('Remove Brand');

    fireEvent.click(removeBrandButton);
    expect(mockBaseFilterProps.setBrand).toHaveBeenCalledWith(ALL);
  });

  test('calls setCategory with ALL when remove category button is clicked', () => {
    const { getByTitle } = render(<FilterContainer {...mockBaseFilterProps} />);
    const removeCategoryButton = getByTitle('Remove Category');

    fireEvent.click(removeCategoryButton);
    expect(mockBaseFilterProps.setCategory).toHaveBeenCalledWith(ALL);
  });
  
});
