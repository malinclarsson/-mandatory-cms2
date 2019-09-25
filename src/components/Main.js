import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import axios from 'axios';
import Navbar from './Navbar';
import { FaCartArrowDown } from 'react-icons/fa';

// import { debounce } from 'debounce';  -> filtrering

const Main = () => { //props, result behövs inte längre

  const [results, setResult] = useState([]);
  // eslint-disable-next-line
  const [initResult, setInitResult] = useState([]); // 'initResult' is assigned a value but never used (in previous, now removed, function)
  // eslint-disable-next-line
  const [filterResult, setFilterResult] = useState([]); // 'setFilterResult' is assigned a value but never used (in previous, now removed, function)
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [page, setPage] = useState(1);
  const [max, setMax] = useState(1);
  const limit = 6;


  useEffect(() => {
    if (inputValue) {
      axios.get(`http://192.168.99.102:8080/api/collections/get/Products?filter[name][$regex]=${inputValue}`)
        .then(res => {
          setResult(res.data.entries);
          setInitResult(res.data.entries);
          setMax(Math.floor(res.data.total / limit) + 1)
        })
        .catch(function (error) {
          console.log('Error fetching the api - no inputValue')
        });
    } else if(checked){
      axios.get('http://192.168.99.102:8080/api/collections/get/Products?filter[stock][$regex]=[1-9]')
        .then(res => {
          setResult(res.data.entries);
          setInitResult(res.data.entries);
          setMax(Math.floor(res.data.total / limit) + 1)
        })
        .catch(function (error) {
          console.log('Error fetching the api - no items in stock')
        });
    } else {
      axios.get(`http://192.168.99.102:8080/api/collections/get/Products?limit=${limit}&skip=${limit * page - limit}`)
        .then(res => {
          console.log(res.data.entries);
          setResult(res.data.entries);
          setInitResult(res.data.entries);
          setMax(Math.floor(res.data.total / limit) + 1)
        })
        .catch(function (error) {
          console.log('Error fetching the api')
        });
    }

  }, [page, inputValue, checked]);


    //-----------------------------------------------------------------------
    function addToCart() {
      alert('added to cart!')
    }
    //-----------------------------------------------------------------------

  return (
    <div>
      <Navbar />

      <div className='searchDiv'>
        <input className='searchBar' type='text' placeholder='Search...' 
               value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> {/* Debounce? */}
      </div>

      <div className='inStock'>
        <br></br>
        In Stock :{' '}
        <input type='checkbox' onChange={(e) => setChecked(e.target.checked)} />
      </div>



      <div className='container'>

        {filterResult.length ? filterResult.map((result) => (
            <div className='card' key={result._id}>
              <Link to={`/Details/${result._id}`}> <h3>{result.name}</h3> </Link>
              <p><img src={'http://192.168.99.102:8080/' + result.img.path} alt={'avatar'}></img></p>
              <p className='text'>{result.description}</p>
              <div className='numbers'>
                <p>Price: {result.stock}sek</p>
                <p>In stock: {result.stock}</p>
              </div>
            </div>
          )):


        results.map(result => (
            <div className='card' key={result._id}>
              <Link to={`/Details/${result._id}`}> <h3>{result.name}</h3> </Link>
              <p><img src={'http://192.168.99.102:8080/' + result.img.path} alt={'avatar'}></img></p>
              <p className='text'>{result.description}</p>
              <div className='numbers'>
                <p>Price: {result.stock}sek</p>
                <p>In stock: {result.stock}</p>
                <button className='buyBTS' onClick={addToCart}>{' '}<FaCartArrowDown />{' '}</button>
              </div>
            </div>
          ))}

      </div>


      <div className='pages'>
        <button onClick={() => setPage(page - 1)}>&lt;</button>
        <input type='number' min={1} max={max} defaultValue={page} />
        <button onClick={() => setPage(page + 1)}>&gt;</button>
      </div>
      
    </div>
  );
};

export default Main;
