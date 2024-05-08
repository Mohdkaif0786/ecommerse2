import React from 'react'
import './search.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '../../../Myhooks/useFech';
function Search({ setShowSearch }) {

  let [query, setQuery] = useState('');
  let navigate = useNavigate();

  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  }

  let data = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);



  return (
    <div className="search-model">
      <div className="search-header">
        <input type="text" autoFocus placeholder='search for product' value={query} onChange={queryChangeHandler} />
        <span className='close-btn' onClick={() => setShowSearch(false)}>&#10005;</span>
      </div>
      <div className="search-result-content">
        <div className="search-result">
          {
            query.length > 0 && data?.data.map(item => <div className="search-item" onClick={() => {
              navigate(`/product/${item?.id}`)
              setShowSearch(false);
            }}>
              <div className="search-item-image">
                <img src={import.meta.env.REACT_APP_DEV_URL + item?.attributes?.img?.data?.attributes?.url} alt="cart-img" />
              </div>
              <div className="search-item-detail">
                <div className="sch-prod-name">{item?.attributes?.title}</div>
                <div className="sch-prod-description">{item?.attributes?.desc}</div>
              </div>
            </div>)

          }
        </div>
      </div>

    </div>
  )
}

export default Search