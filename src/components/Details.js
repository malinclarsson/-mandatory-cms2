import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import styles from '../index.module.css';

const Details = (props) => {
	const [details, setDetails] = useState(null);

    useEffect(() => {
        axios.get(`http://192.168.99.102:8080/api/collections/get/Products`)
            .then((res) => setDetails(res.data.entries[0]));

	}, []);


  if (!details) {
    return <p>Loading...</p>;
  }


  console.log(details);
  return (
    <body>
      <div className='link'>
        <Link to='/'>Products</Link>
        <Link to='/Cart'>Cart</Link>
      </div>
      {details.map((details) => (
        <div className='short' key={details._id}> 
        <h2 >{details.name.dispaly}</h2>
        <h2 >{details.description}</h2>
          <p >In stock: {details.price}</p>
          <p >
                <img
                  src={'http://192.168.99.102:8080/' + details.img.path}
                  alt={'avatar'}
                ></img>
              </p>
          <hr></hr>
        </div>
      ))}
    </body>
  );
};

export default Details;
