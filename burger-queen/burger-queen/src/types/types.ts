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
    orders: OrderProduct[];
    onRemove: (id: number) => void;
    onAddQuantity: (id: number) => void;
}
export interface OrderProduct {
    qty: number;
    product: Product;
}
export interface Order {
    id: number;
    userId: number;
    client: string;
    products: OrderProduct[];
    status: string;
    dateEntry: string;
    dateProcessed?: string;
}