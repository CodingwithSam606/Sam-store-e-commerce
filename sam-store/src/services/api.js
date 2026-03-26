import axios from "axios";

// Make sure this matches your .NET port exactly
const BASE_URL = "http://localhost:5149";

export const getProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        console.log("Data fetched:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const getCart = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/cart`);
        return response.data;
    } catch (error) {
        console.error("Error fetching cart:", error);
        return [];
    }
};

export const addToCartAPI = async (product) => {
    try {
        const item = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image
        };
        const response = await axios.post(`${BASE_URL}/cart`, item);
        return response.data;
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
};

export const removeFromCartAPI = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/cart/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error removing from cart:", error);
    }
};

// FIXED: Used BASE_URL and matched the backend route "/clear-cart"
export const clearCartAPI = async () => {
    try {
        await axios.delete(`${BASE_URL}/clear-cart`);
    } catch (error) {
        console.error("Error clearing cart:", error);
    }
};