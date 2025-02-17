import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Detailedpage from './routes/Detailedpage';
import Updatepage from './routes/Updatepage';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

const App = () => {
    return (
        <RestaurantsContextProvider>
            <div className='container'>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/restaurants/:id/update" element={<Updatepage />} />
                        <Route exact path="/restaurants/:id" element={<Detailedpage />} />
                    </Routes>
                </Router>
            </div>
        </RestaurantsContextProvider>
    );
};


export default App;