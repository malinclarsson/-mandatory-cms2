import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import Navbar from "./Navbar";
// import Reviews from './Reviews';
import { FaCartArrowDown } from "react-icons/fa";
import Reviews from "./Reviews";

const Details = props => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://192.168.99.102:8080/api/collections/get/Products?filter[_id]=${props.match.params.id}`
      )
      .then(res => setResult(res.data.entries[0]));
  }, [props.match.params.id]);

  //console.log('props.match.params.id = ' + props.match.params.id)
  console.log("result = ", result);

  //--------------------------------------------------------------
  const [review, setReview] = useState(null);

  useEffect(() => {	
    axios
      .get(`http://192.168.99.102:8080/api/collections/get/Reviews`)
      .then(res => setReview(res.data.entries));
  }, []);
//--------------------------------------------------------------


  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    let newCart;
    if (cart.hasOwnProperty(result._id)) {
      cart[result._id].quantity += 1;
      newCart = cart;
    } else {
      newCart = { ...cart, [result._id]: { ...result, quantity: 1 } };
    }
    props.setCart(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart));
    console.log("item added to cart", newCart);
  }

  return (
    <div>
      <Helmet>
        <title>Product Details</title>
      </Helmet>

      <Navbar />


      {!result ? (
        <h3>Loading...</h3>
      ) : (
        <div className="bigCard" key={result._id}>
          <h2>{result.name}</h2>
          <h2>{result.description}</h2>
          <p>Price: {result.price}sek</p>
          <p>In stock: {result.stock}</p>
          <p>
            <img
              src={"http://192.168.99.102:8080/" + result.img.path}
              alt="product"
            ></img>
          </p>
          <div className="gallery">
            {result.gallery.map(item => (
              <p>
                <img
                  className="galleryItem"
                  src={"http://192.168.99.102:8080/" + item.path}
                  alt="gallery"
                ></img>
              </p>
            ))}
          </div>

          <div className="reviews"> <Reviews />
            
          {/*//--------------------------------------------------------------	*/}
          {/*
        {review && result
        // eslint-disable-next-line
          ? review.map(x => { //Expected to return a value at the end of arrow function
              if (x.Product.display === result.name) {
                console.log(x);
                return (
                  <div className="comment-row">
                    <span>{x.name}</span>
                    <span>{x.text}</span>
                    <span>{x.rating}</span>
                  </div>
                );
              }
            }) : null}
            */}
          {/*//-------------------------------------------------------------- */}
        
          </div>

          <button className="buyBTS" onClick={addToCart}>{" "}<FaCartArrowDown />{" "}</button> 
        </div>
      )}
    </div>
  );
};

export default Details;
