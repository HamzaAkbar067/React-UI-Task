import { useEffect, useState } from 'react';
import { getCategories } from '../services';

function useCategories(reload: boolean) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategories(categories)
      })
      .catch((e) => {
        console.log('error', e)
      })
  }, [reload]);

  return { categories };
}

export default useCategories;
