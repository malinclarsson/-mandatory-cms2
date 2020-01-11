import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = (result) => {
  const [review, setReview] = useState(''); 

  useEffect(() => {	
    axios
      .get(`http://192.168.99.102:8080/api/collections/get/Reviews`)
      .then(res => setReview(res.data.entries[1])); //must give an index, or else I get the whole array och reviews. 
  }, []);                                           //I need the specific index for the product chosen in Details.js
  console.log('review: ', review); 


  //Trying to solve the problem by comparing result._by with review._by (in the right review).
  //They have the same value in both result and review, but I can't access them at the same time
  console.log('result._by', result._by); // null
  console.log('review._by', review._by); //gives me a value




  //renders the review, but only the one indexed in line 10.
  return (
    <div>
      <div className='reviewCard'> 
        <div>
          <h4>Name: {review.name}</h4>
          <p className='rating'>
            Ranking: {review.rating}/5</p>
          <p>Comment: {review.body}</p>
					<hr></hr>
        </div>
      </div>
    </div>
  );
};
export default Reviews;