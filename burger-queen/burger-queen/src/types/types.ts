export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    type: string;
    dateEntry: string;
    quantity: number;
}

export interface GetProductsParams {
    page: number;
    limit: number;
    type?: string;
}

export interface OrderListProps {
    orders: Product[];
    onRemove: (id: number) => void;
    onAddQuantity: (id: number) => void; 
}