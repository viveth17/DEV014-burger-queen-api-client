import styles from '../styles/OrderCard.module.css';
import { getOrders } from '../services/APIService';
import { GetProductsParams } from '../types/types';
import { useState, useEffect } from 'react';
import { Order } from '../types/types';


export default function OrderCard() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const params: GetProductsParams = {
                page: 1,
                limit: 20,
                type: '',
            };
            try {
                const data = await getOrders(params);
                setOrders(data);
            } catch (error) {
                console.error('Failed to fetch orders:', error);
            }
        };
        fetchOrders();
    }, []);

    return (
        <div>
            {orders.map(order => (
                <div key={order.id} className={styles.containerCard}>
                    <div className={styles.containerId}>ID: {order.id}</div>
                    <div className={styles.containerNameClient}>Cliente: {order.client}</div>
                    <div className={styles.containerDateEntry}>{order.dateEntry}</div>
                    <div className={styles.containerProducts}>
                        {order.products.map((orderProduct, index) => (
                            <div key={index}>
                                <div className={styles.nameProduct}>{orderProduct.product.name}</div>
                                <div className={styles.quantity}>{orderProduct.qty}</div>
                            </div>
                        ))}
                    </div>
                    <button className={styles.buttonStatus}>{order.status}</button>
                </div>
            ))}
        </div>
    );
}


