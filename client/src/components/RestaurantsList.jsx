import React, { useContext, useEffect } from 'react';
import restaurantFinder from '../api/restaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useNavigate } from "react-router-dom"
import StarRating from './StarRating';


const RestaurantsList = () => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);
    let navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await restaurantFinder.get("/");
                console.log("Here is what you want", response.data.data)
                setRestaurants(response.data.data.restaurant); 
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [setRestaurants]);


    const handleDelete = async (e, id) => {
        e.stopPropagation();
        console.log("Restaurant ID being deleted:", id); // Check ID value
        try {
            await restaurantFinder.delete(`/${id}`);
            setRestaurants(prevRestaurants => 
                prevRestaurants.filter(restaurant => restaurant.id !== id)
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (e,id) => {
        e.stopPropagation()

        try {
            navigate(`/restaurants/${id}/update`);
        } catch (error) {
            
        }
    };

    const handleRestaurantSelect = async (id) => {
        
        try {
            navigate(`/restaurants/${id}`)
        } catch (error) {
            
        }
    }

    const renderRating = (restaurant) => {
        if (!restaurant.count) {
            return (
                <span className="text-warning">0 reviews</span>
            )
        }
        
        return (
            <div className="d-flex align-items-center">
                <StarRating rating={restaurant.average_rating} />
                <span className="text-warning ml-1">({restaurant.count})</span>
            </div>
        )
    }

    return (
        <div>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className='bg-primary'>
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map((restaurant) => {
    
                        console.log("Individual restaurant:", restaurant); // Check each restaurant object
                        return (
                            <tr onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"$".repeat(restaurant.price_range)}</td>
                                <td>{renderRating(restaurant)}</td>
                                <td><button onClick={(e) => handleUpdate(e,restaurant.id)} className="btn btn-warning">Update</button></td>
                                <td>
                                    <button 
                                        onClick={(e) => handleDelete(e, restaurant.id)} 
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default RestaurantsList;