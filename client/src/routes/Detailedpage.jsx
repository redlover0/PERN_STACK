import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import restaurantFinder from '../api/restaurantFinder';
import Reviews from '../components/Reviews';
import { AddReview } from '../components/AddReview';

const Detailedpage = () => {
  const { id } = useParams();
  const { selectedRestaurants, SetSelectedRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await restaurantFinder.get(`/${id}`);
        SetSelectedRestaurants(response.data.data.restaurant);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, SetSelectedRestaurants]);

  return (
    <div>
      {selectedRestaurants && (
        <>
          <div className="mt-3">
            <Reviews />
          </div>
          <AddReview/>
        </>
      )}
    </div>
  );
};

export default Detailedpage;