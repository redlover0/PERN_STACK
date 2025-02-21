import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import restaurantFinder from '../api/restaurantFinder';
import Reviews from '../components/Reviews';
import { AddReview } from '../components/AddReview';
import StarRating from '../components/StarRating';

const Detailedpage = () => {
  const { id } = useParams();
  const { selectedRestaurant, SetSelectedRestaurant } = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await restaurantFinder.get(`/${id}`);
        console.log("Restaurant data:", response.data.data); // Debug log
        SetSelectedRestaurant(response.data.data);
      } catch (error) {
        console.error("Error fetching restaurant:", error);
      }
    };
    fetchData();
  }, [id, SetSelectedRestaurant]);

  return (
    <div>

      {selectedRestaurant && (
        <><h1 className='text-center display-1'>{selectedRestaurant.restaurant.name}</h1>
        <div className="text-center">
          <StarRating rating={selectedRestaurant.restaurant.average_rating}/>
          <span className="text-warning-ml-1">
            {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})`
            :"(0)"}
          </span>
        </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default Detailedpage;