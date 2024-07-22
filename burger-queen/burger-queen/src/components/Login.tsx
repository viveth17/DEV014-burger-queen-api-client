import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import { GiCrown } from 'react-icons/gi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginApi } from '../services/APIService';

const schema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('El Email es obligatorio'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 carácteres').required('La contraseña es obligatoria'),
});

const Login: React.FC = () => {
    const [error, setError] = useState('');

    const submitForm = async (values: { email: string; password: string; }) => {
        try {
            await loginApi(values.email, values.password);
        } catch (err) {
            setError('Email o contraseña inválidos');
        }
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: submitForm,
        validationSchema: schema,
    });

    return (
        <div className={styles.logincontainer}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}> BURGER QUEEN <GiCrown className={styles.crownIcon} /></h1>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.logoContainer}>
                <img className={styles.logo} src="/IMAGEN HAMBURGUESA.png" alt="Hamburguesa" />
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className={styles.emailContainer}>
                    <p className={styles.nameinput}></p>
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Email:'
                    />
                    {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}
                </div>
                <div className={styles.passwordContainer}>
                    <p className={styles.nameinput}></p>
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Password:'
                    />
                    {formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span> : null}
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} type="submit">
                        INGRESAR
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;

