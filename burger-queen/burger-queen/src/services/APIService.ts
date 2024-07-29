import { GetProductsParams, Order } from "../types/types";

//Función para iniciar sesión //
export async function loginApi(email: string, password: string) {
    const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    if (!response.ok) {
        throw new Error('Invalid email or password');
    }

    const data = await response.json();
    const token = data.accessToken;
    if (!token) {
        throw new Error('Token is missing in the response');
    }
    localStorage.setItem('authToken', token);
    return data;


}


//Función para obtner productos de burger queen api mock//

export const getProducts = async ({ page, limit, type }: GetProductsParams) => {
    try {
        const token = localStorage.getItem('authToken');
        if (!token) {
            throw new Error('No token found');
        }

        let url = `http://localhost:8080/products?_page=${page}&_limit=${limit}`;
        if (type) {
            url += `&type=${type}`;
        }


        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {

        console.error('Error fetching products:', error);
        throw error;
    }
};

//Función para obtener ordenes de burger queen api mock

export const getOrders = async ({ page, limit, type }: GetProductsParams) => {
    try {
        const token = localStorage.getItem('authToken');
        if (!token) {
            throw new Error('No token found');
        }

        let url = `http://localhost:8080/orders?_page=${page}&_limit=${limit}`;
        if (type) {
            url += `&type=${type}`;
        }

        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {

        console.error('Error fetching products:', error);
        throw error;
    }
};


//Función para crear una orden//

export async function CreateOrden(order: Order): Promise<unknown> {
    const token = localStorage.getItem('authToken');
    if (!token) {
        throw new Error('No token found');
    }

    const response = await fetch('http://localhost:8080/orders', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(order),
    });

    if (!response.ok) {
        throw new Error('Failed to create order');
    }

    const data = await response.json();
    return data;
}






