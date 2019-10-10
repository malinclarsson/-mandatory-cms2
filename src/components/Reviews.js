import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = (props, name, rating, body) => {
  const [review, setReview] = useState(null);

  useEffect(() => {	
    axios
      .get(`http://192.168.99.102:8080/api/collections/get/Reviews?filter[_id]=${props.match.params.id}`)
      .then(res => setReview(res.data.entries[0]));
  }, [props.match.params.id]);

  console.log('review = ', review); // loggar rätt id på reviews :D



  return (
    <div>
      <div className='reviewCard'> 
        <div>
          <h4>{review.name}</h4> {/* {review.name} */}
          <p className='rating'>{review.rating}</p> {/* {review.rating} */}
          <p>{review.body}</p> {/* {review.body} */}
					<hr></hr>
        </div>
      </div>
    </div>
  );
};
export default Reviews;