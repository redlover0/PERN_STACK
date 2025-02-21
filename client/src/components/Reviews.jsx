import React from 'react';
import StarRating from './StarRating';

const Reviews = ({ reviews = [] }) => {

  if (!reviews || reviews.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No reviews available yet.
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="col-md-4 mb-3"
          >
            <div className="card text-white bg-primary h-100">
              <div className="card-header d-flex justify-content-between">
                <span>{review.name}</span>
                <span>
                  <StarRating rating={review.rating}/>
                </span>
              </div>
              <div className="card-body">
                <p className="card-text">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

// import React from 'react'
// import StarRating from './StarRating'

// export const Reviews = ({ reviews }) => {

//     const Reviews = ({ reviews = [] }) => {
//         if (!reviews || reviews.length === 0) {
//           return (
//             <div className="p-4 text-center text-gray-500">
//               No reviews available yet.
//             </div>
//           );
//         }
      
//   return (
//     <div className='row row-cols-3 mb-2'>
//         {reviews.map((review) => {
//             return(
//                 <div className="card text-white bg-primary mb-3 me-4" style={{ maxWidth: "30%" }}>
//                 <div className="card-header d-flex justify-content-between">
//                     <span>Jonna</span>
//                     <span><StarRating rating={3}/></span>
//                 </div>
//                 <div className="card-body">
//                     <p className="card-text">This is so cool</p>
//                 </div>
//             </div>
//             )
//         })}
//         {/* <div className="card text-white bg-primary mb-3 me-4" style={{ maxWidth: "30%" }}>
//             <div className="card-header d-flex justify-content-between">
//                 <span>Jonna</span>
//                 <span><StarRating rating={3}/></span>
//             </div>
//             <div className="card-body">
//                 <p className="card-text">This is so cool</p>
//             </div>
//         </div>
//         <div className="card text-white bg-primary mb-3 me-4" style={{ maxWidth: "30%" }}>
//             <div className="card-header d-flex justify-content-between">
//                 <span>Jonna</span>
//                 <span><StarRating rating={3}/></span>
//             </div>
//             <div className="card-body">
//                 <p className="card-text">This is so cool</p>
//             </div>
//         </div>
//         <div className="card text-white bg-primary mb-3 me-4" style={{ maxWidth: "30%" }}>
//             <div className="card-header d-flex justify-content-between">
//                 <span>Jonna</span>
//                 <span><StarRating rating={3}/></span>
//             </div>
//             <div className="card-body">
//                 <p className="card-text">This is so cool</p>
//             </div>
//         </div>
//         <div className="card text-white bg-primary mb-3 me-4" style={{ maxWidth: "30%" }}>
//             <div className="card-header d-flex justify-content-between">
//                 <span>Jonna</span>
//                 <span><StarRating rating={3}/></span>
//             </div>
//             <div className="card-body">
//                 <p className="card-text">This is so cool</p>
//             </div>
//         </div> */}
//     </div>
//   )
// }

// export default Reviews;

