import React, { useState, createContext } from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurants, SetSelectedRestaurants] = useState(null);

    const addRestaurant = (restaurant) => {
        setRestaurants([...restaurants, restaurant]);
    };

    return (
        <RestaurantsContext.Provider value={{ restaurants, setRestaurants, addRestaurant, selectedRestaurants, SetSelectedRestaurants}}>
            {props.children}
        </RestaurantsContext.Provider>
    );
};