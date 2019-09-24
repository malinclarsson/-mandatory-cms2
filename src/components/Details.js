import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { FaCartArrowDown } from 'react-icons/fa';


const Details = (props) => {
  const [result, setResult] = useState(null);

    useEffect(() => {
        axios.get(`http://192.168.99.102:8080/api/collections/get/Products?filter[_id]=${props.match.params.id}`)
            .then((res) => setResult(res.data.entries[0]));
    }, [props.match.params.id]); // måste hämta sidan för varje id

  console.log("props.match.params.id =" + props.match.params.id) //Hämtar två gånger: 1:a=undefined,  2:a=null
  console.log("result =" + result) //Hämtar två gånger: 1:a=null,  2:a=undefined
  
  // addToCart  

  return (
      <div>
        <Navbar />
        
        {!result ? <h3>Loading...</h3> : //if result is false ->  show "Loading" ELSE show rest
            <div className='card' key={result._id}> 
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
              <p>
              <img src={"http://192.168.99.102:8080/" + result.gallery.path}
                  alt='gallery' ></img>
              </p>
                <button className='buyBTS'> <FaCartArrowDown /> </button>
            </div>
        }
        </div>  
  )  
}

export default Details;