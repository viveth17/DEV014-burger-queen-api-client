import { GetProductsParams } from "../types/types";

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

  
    console.log('API Response:', data);


    const token = data.accessToken;
    if (!token) {
        throw new Error('Token is missing in the response');
    }

    
    console.log('Token:', token);



    localStorage.setItem('authToken', token);

  
    const storedToken = localStorage.getItem('authToken');
    console.log('Stored Token:', storedToken);


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

        
        console.log(data); 
        return data;
    } catch (error) {
        
        console.error('Error fetching products:', error);
        throw error;
    }
};




