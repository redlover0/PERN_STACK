import React, { useContext, useEffect, useState } from 'react'
import { Await, useParams, useNavigate } from 'react-router-dom'
import restaurantFinder from "../api/restaurantFinder"



const UpdateResturant = () => {
    const {id} = useParams()
    let navigate = useNavigate()
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await restaurantFinder.get(`/${id}`)
            console.log(response.data.data)
            setName(response.data.data.restaurant.name)
            setLocation(response.data.data.restaurant.location)
            setPriceRange(response.data.data.restaurant.price_range)
        }
        fetchData();
    }, []);

    const handleSubmit = async (e)  =>  {
        e.preventDefault()
        await restaurantFinder.put(`/${id}`, {
            name,
            location,
            price_range: priceRange
        })
        navigate("/");
    };

  return (
    <div>
        <form action="">
            <div>
                <label htmlFor='name'>name</label>
                <input value={name} onChange={e => setName(e.target.value)} id='name' className='form-control' type='text'/>
            </div>

            <div>
                <label htmlFor='location'>location</label>
                <input value={location} onChange={e => setLocation(e.target.value)} id='location' className='form-control' type='text'/>
            </div>

            <div>
                <label htmlFor='price_range'>Price Range</label>
                <input value={priceRange} onChange={e => setPriceRange(e.target.value)} id='price_range' className='form-control' type='number'/>
            </div>
            <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default UpdateResturant