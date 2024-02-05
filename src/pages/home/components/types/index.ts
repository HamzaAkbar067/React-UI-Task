import { Dispatch, SetStateAction } from 'react';

export interface BaseFilterProps {
  category?: string
  setCategory?: Dispatch<SetStateAction<string>>
  brand?: string
  setBrand: Dispatch<SetStateAction<string>>
};
