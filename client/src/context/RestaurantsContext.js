import React, { useState, createContext } from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, SetSelectedRestaurant] = useState(null);

    const addRestaurant = (restaurant) => {
        setRestaurants([...restaurants, restaurant]);
    };

    return (
        <RestaurantsContext.Provider value={{ restaurants, setRestaurants, addRestaurant, selectedRestaurant, SetSelectedRestaurant}}>
            {props.children}
        </RestaurantsContext.Provider>
    );
};