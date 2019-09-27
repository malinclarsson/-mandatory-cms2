import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = props => {
  const [review, setReview] = useState(null);

  useEffect(() => {	
    axios
      .get(`http://192.168.99.102:8080/api/collections/get/Reviews`)
      .then(res => setReview(res.data.entries));
  }, []);

	console.log('review = ', review);
	


  return (
    <div>
      <div className='reviewCard'> 
        <div>
          <h4>Name</h4> {/* {review.name} */}
          <p className='rating'>Rating</p> {/* {review.rating} */}
          <p>Body</p> {/* {review.bodyname} */}
					<hr></hr>
        </div>

      </div>
    </div>
  );
};
export default Reviews;
