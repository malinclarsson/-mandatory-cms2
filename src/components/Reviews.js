import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = (props, name, rating, body) => {
  const [review, setReview] = useState(null);

  useEffect(() => {	
    axios
      .get(`http://192.168.99.102:8080/api/collections/get/Reviews`)
      .then(res => setReview(res.data.entries[0]));
  }, []);

  console.log('review = ', review); // loggar rätt id på reviews :D



  return (
    <div>
      <div className='reviewCard'> 
        <div>
          <h4>name</h4> {/* {review.name} */}
          <p className='rating'>rating</p> {/* {review.rating} */}
          <p>body</p> {/* {review.body} */}
					<hr></hr>
        </div>
      </div>
    </div>
  );
};
export default Reviews;