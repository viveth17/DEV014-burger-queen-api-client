import styles from '../styles/OrderCard.module.css';
import { getOrders } from '../services/APIService';
import { GetProductsParams } from '../types/types';
import { useState, useEffect } from 'react';
import { Order } from '../types/types';

export default function OrderCard() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrders = async () => {
            const params: GetProductsParams = {
                page: 1,
                limit: 100,
                type: '',
            };
            try {
                setLoading(true);
                const data = await getOrders(params);
                setOrders(data);
            } catch (error) {
                setError('Failed to fetch orders');
                console.error('Failed to fetch orders:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    // Ordenar los pedidos por fecha de entrada (dateEntry) , pedidos mas recientes aparecerán en la parte superior
    const sortedOrders = [...orders].sort((a, b) => new Date(b.dateEntry).getTime() - new Date(a.dateEntry).getTime());

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={styles.containerPrincipal}>
            <h2>Lista de Pedidos</h2>
            <ul>
                {sortedOrders.map(order => (
                    <li key={order.id}>
                        <div className={styles.containerCard}>
                            <p>Pedido ID: {order.id}</p>
                            <p>Cliente: {order.client}</p>
                            <p>Fecha: {order.dateEntry}</p>
                            <div className={styles.containerProducts}>
                                {order.products.map(orderProduct => (
                                    <div key={orderProduct.product.id} className={styles.productItem}>
                                        <div className={styles.nameProduct}>{orderProduct.product.name}</div>
                                        <div className={styles.quantity}>{orderProduct.qty}</div>
                                    </div>
                                ))}
                            </div>
                            <button className={styles.buttonStatus}>{order.status}</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}



