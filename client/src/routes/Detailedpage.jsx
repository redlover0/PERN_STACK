import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import restaurantFinder from '../api/restaurantFinder'



const Detailedpage = () => {
  const {id} = useParams()
  const {selectedRestaurants, SetSelectedRestaurants} = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {

    try {
        const response = await restaurantFinder.get(`/${id}`)
        SetSelectedRestaurants(response.data.data.restaurant);
    } catch (error) {
      console.log(error)
    }}
    fetchData();
  }, []);

  return (
    <div>{selectedRestaurants && selectedRestaurants.name}
    </div>
  )
}

export default Detailedpage