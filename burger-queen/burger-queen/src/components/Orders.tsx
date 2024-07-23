import styles from '../styles/Orders.module.css';
import { Logo } from './Logo';


export default function Orders() {
    return (
        <div className={styles.container}>
            < Logo />
            <div className={styles.containerMenus}>
                <button className={styles.breakfast}>Desayuno</button>
                <button className={styles.lunchdinner}>Almuerzo y cena</button>
            </div>
            <div className={styles.containerNameClient}>
                <p>Cliente:</p>
                <input
                    type="nameClient"
                    name="nameClient">
                </input>
            </div>
            <div className={styles.containerProducts}>
                <img className={styles.logo} src="/IMAGEN HAMBURGUESA.png" alt="Hamburguesa" />
                <img className={styles.logo} src="/IMAGEN HAMBURGUESA.png" alt="Hamburguesa" />
                <img className={styles.logo} src="/IMAGEN HAMBURGUESA.png" alt="Hamburguesa" />
                <img className={styles.logo} src="/IMAGEN HAMBURGUESA.png" alt="Hamburguesa" />
                <img className={styles.logo} src="/IMAGEN HAMBURGUESA.png" alt="Hamburguesa" />
                <img className={styles.logo} src="/IMAGEN HAMBURGUESA.png" alt="Hamburguesa" />
                <img className={styles.logo} src="/IMAGEN HAMBURGUESA.png" alt="Hamburguesa" />
                <img className={styles.logo} src="/IMAGEN HAMBURGUESA.png" alt="Hamburguesa" />
                <img className={styles.logo} src="/IMAGEN HAMBURGUESA.png" alt="Hamburguesa" />
            </div>
            <div className={styles.orderList}>
                <div className={styles.list}>
                    <p> Art.seleccionado</p>
                    <p> Cantidad</p>
                    <p> Precio</p>
                </div>
                <p className={styles.total}>Total $0.00</p>
                <div className={styles.containerButton}>
                    <button className={styles.buttonCocina}> Enviar a cocina </button>
                </div>
            </div>
        </div>
    );
}
