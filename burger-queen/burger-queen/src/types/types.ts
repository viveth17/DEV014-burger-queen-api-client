export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    type: string;
    dateEntry: string;
}

export interface GetProductsParams {
        page: number;
        limit: number;
        type?: string;
    }