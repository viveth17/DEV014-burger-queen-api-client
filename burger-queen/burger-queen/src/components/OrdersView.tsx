import { Logo } from './Logo';
import OrderCard from './OrderCard';
import styles from '../styles/OrdersView.module.css';

function OrdersView() {
    return (
        <div>
            <Logo />
            <h1 className={styles.titlePrincipal}>Pedidos</h1>
            <OrderCard />
        </div>
    )
}

export default OrdersView