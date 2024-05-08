import React from 'react'
import "./product.css";
import { useNavigate } from 'react-router-dom';
const Product = ({ product }) => {
  const id = product?.id;
  const img = product?.attributes?.img?.data?.attributes?.url;
  const title = product?.attributes?.title;
  const price = product?.attributes?.price;

  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => {
      navigate(`/product/${id}`);
      window.scrollTo(0,0);
    }}>
      <div className="product-card-thumbnail">
        <img src={import.meta.env.REACT_APP_DEV_URL + img} alt="product-img" />
      </div>
      <div className="product-detail">
        <div className="product-name">{title}</div>
        <div className="product-price">&#8377;{price}</div>
      </div>
    </div>
  )
}

export default Product