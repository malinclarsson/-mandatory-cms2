import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import axios from "axios";
import Navbar from "./Navbar";
import { FaCartArrowDown } from "react-icons/fa";

const Main = () => {
  const [results, setResult] = useState([]);
  // const [filterResult, setFilterResult] = useState([]);
  const [initResult, setInitResult] = useState([]);
  const [page, setPage] = useState(1);
  const [max, setMax] = useState(1);
  const limit = 6;

  useEffect(() => {
    axios
      .get(
        `http://192.168.99.102:8080/api/collections/get/Products?limit=${limit}&skip=${limit*page-limit}`
      )
      .then(res => {
        console.log(res.data.entries);
        setResult(res.data.entries);
        setInitResult(res.data.entries);
        setMax(Math.floor(res.data.total / limit) + 1);
      })
      .catch(function(error) {
        console.log("Error fetching the api");
      });
  }, [page]);

  /*
  function searchFilter(searchQuery) {
    const regex = new RegExp(searchQuery, "i");
    setFilterResult(results.filter(result => result.name.match(regex)));
  }
  */

  function showStock(checked) {
    if (checked) {
      setResult(results.filter(result => result.stock > 0));
    } else {
      setResult(initResult);
    }
  }

  return (
    <body>
      <Navbar />

      <div className="inStock">
        {/*
        <input
          type="text"
          placeholder="Search..."
        
          onChange={e => searchFilter(e.target.value)}
        />
        */}
        <br></br>
        In Stock :{" "}
        <input type="checkbox" onChange={e => showStock(e.target.checked)} />
      </div>

      <div className="container">
        {results.map(result => (
          <div className="card" key={result._id}>
            <Link to={`/Products/${result._id}`}>
              <h3>{result.name}</h3>
            </Link>
            <p>
              <img
                src={"http://192.168.99.102:8080/" + result.img.path}
                alt={"avatar"}
              ></img>
            </p>
            <p className="text">{result.description}</p>
            <div className="numbers">
              <p>Price: {result.stock}sek</p>
              <p>In stock: {result.stock}</p>
              <button className="buyBTS">
                {" "}
                <FaCartArrowDown />{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='pages'>
        <button onClick={() => setPage(page - 1)}>&lt;</button>
        <input type="number" min={1} max={max} value={page} />
        <button onClick={() => setPage(page + 1)}>&gt;</button>
      </div>
    </body>
  );
};

export default Main;
