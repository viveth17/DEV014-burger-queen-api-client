import { Product } from '../types/types';

export const filterData = (data: Product[], types: string[]): Product[] => {

    const filteredData = data.filter(item => types.includes(item.type));

    return filteredData;
};

