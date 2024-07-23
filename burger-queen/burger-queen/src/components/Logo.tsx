import styles from '../styles/Logo.module.css';
import { GiCrown } from 'react-icons/gi';

export const Logo = () => {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}> BURGER QUEEN <GiCrown className={styles.crownIcon} /></h1>
        </div>
    )
}
