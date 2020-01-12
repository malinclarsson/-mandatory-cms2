import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = (result) => {
  const [review, setReview] = useState(''); 

  useEffect(() => {	
    axios
      .get(`http://192.168.99.102:8080/api/collections/get/Reviews`)
      .then(res => setReview(res.data.entries[5])); //måste ge ett specifikt index, annars får jag hela arrayn
  }, []);                                           //men behöver komma åt produktens id från Details.js
  console.log('review: ', review); 


  //Försökt jämföra  result._by with review._by ( reviewsamma värde i "rätt").
  console.log('result._by', result._by); // null
  console.log('review._by', review._by); //gives me a value




  //renderar reviews fint, men bara vad jag indexerat på rad 10
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