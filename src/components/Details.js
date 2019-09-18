import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { FaCartArrowDown } from 'react-icons/fa';


const Details = (props) => {
  const [result, setResult] = useState(null);
    
  useEffect(() => {
      axios.get(`http://192.168.99.102:8080/api/collections/get/Products?filter[_id]=${props.match.params.id}`)
          .then((res) => setResult(res.data.entries[0]));

  }, []);

  return (
      <div>
        <Navbar />
        
        {!result ? <p>Loading...</p> : 
            <div className='short' key={result._id}> 
            <h2 >{result.name}</h2>
            <h2 >{result.description}</h2>
            <p >Price: {result.price}sek</p>
            <p >In stock: {result.stock}</p>
            <p >
              <img
                src={"http://192.168.99.102:8080/" + result.img.path}
                alt='product'>
              </img>
              </p>
                <button className='buyBTS'> <FaCartArrowDown /> </button>
            </div>
        })}
        </div>
  )  
}

export default Details;