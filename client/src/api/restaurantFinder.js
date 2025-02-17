import axios from "axios";

const restaurantFinder = axios.create({
    baseURL: "http://localhost:3407/api/v1/restaurants",  // Removed trailing slash
    timeout: 5000,  // Add timeout
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add response interceptor for better error handling
restaurantFinder.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 500) {
            console.error('Server error:', error.response.data);
        }
        return Promise.reject(error);
    }
);

export default restaurantFinder;