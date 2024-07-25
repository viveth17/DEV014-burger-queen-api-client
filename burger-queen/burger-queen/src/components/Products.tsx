import styles from '../styles/Products.module.css';
import { Logo } from './Logo';
import { ChangeEvent, useState, useEffect } from 'react';
import { getProducts } from '../services/APIService';
import { GetProductsParams, Product } from '../types/types';
import { filterData } from '../utils/filterData';


export default function Products() {

    const [name, setName] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [validProductImages, setValidProductImages] = useState<{ [key: string]: boolean }>({});
    const [filterType, setFilterType] = useState<string[]>(["Beverages", "Breakfast"]); 
    const [selectedButton, setSelectedButton] = useState<string>('breakfast'); 

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const fetchProducts = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.error('No token found');
            return;
        }

        const params: GetProductsParams = {
            page: 1,
            limit: 20,
            type: '',
        };

        try {
            const data = await getProducts(params);
            setProducts(data);
            validateProductImages(data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };
    const validateProductImages = (products: Product[]) => {
        const imageValidationPromises = products.map(product => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = () => {
                    setValidProductImages(prevState => ({
                        ...prevState,
                        [product.id]: true
                    }));
                    resolve();
                };
                img.onerror = () => {
                    setValidProductImages(prevState => ({
                        ...prevState,
                        [product.id]: false
                    }));
                    resolve();
                };
                img.src = product.image;
            });
        });
        Promise.all(imageValidationPromises).then(() => {

        });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        setFilteredProducts(filterData(products, filterType));
    }, [products, filterType]);

    const handleFilterChange = (types: string[], button: string) => {
        setFilterType(types);
        setSelectedButton(button); 
    };


    return (
        <div className={styles.container}>
            < Logo />
            <div className={styles.containerMenus}>
                <button className={`${styles.breakfast} ${selectedButton === 'breakfast' ? 'selected' : 'unselected'}`}
                    onClick={() => handleFilterChange(['Beverages', 'Breakfast'], 'breakfast')}
                >Desayuno</button>
                <button className={`${styles.lunchdinner} ${selectedButton === 'lunchdinner' ? 'selected' : 'unselected'}`}
                    onClick={() => handleFilterChange(['Beverages', 'Lunch', 'Combos', 'Sides'], 'lunchdinner')}
                >Almuerzo y cena</button>
            </div>
            <div className={styles.containerNameClient}>
                <p>Cliente:</p>
                <input
                    type="text"
                    name="nameClient"
                    value={name}
                    onChange={handleNameChange}
                    className={styles.input}
                />
            </div>
            <div className={styles.containerProducts}>
                {filteredProducts.map(product => (
                    <div key={product.id} className={styles.product}>
                        <img
                            className={styles.productImage}
                            src={validProductImages[product.id] ? product.image : '/Image_not_available.png'}
                            alt={product.name ? `${product.name} poster` : 'No image available'}
                        />
                        <div className={styles.containerTitlePrice}>
                            <p className={styles.productPrice}>{'$' + product.price}</p>
                            <p>{product.name}</p>
                        </div>
                    </div>
                ))}
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
