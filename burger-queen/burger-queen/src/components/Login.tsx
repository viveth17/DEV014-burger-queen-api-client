import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import { GiCrown } from 'react-icons/gi';
import { loginApi } from '../services/apiService';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (email === 'usuario@example.com' && password === 'password') {
            // Redireccionar al sistema de pedidos si las credenciales son correctas
            window.location.href = '/sistema-pedidos';
        } else {
            setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className={styles.logincontainer}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}> BURGER QUEEN <GiCrown className={styles.crownIcon} /></h1>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.logoContainer}>
                <img className={styles.logo} src="/IMAGEN HAMBURGUESA.png" alt="Hamburguesa" />
            </div>
            <div className={styles.emailContainer}>
                <p className={styles.nameinput}></p>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email:'
                />
            </div>
            <div className={styles.passwordContainer}>
                <p className={styles.nameinput}></p>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password:'
                />
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleLogin}>
                    INGRESAR
                </button>
            </div>
        </div>
    );
};

export default Login;

