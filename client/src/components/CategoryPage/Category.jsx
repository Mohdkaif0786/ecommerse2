import React from 'react'
import Products from '../products';
import './Category.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../Myhooks/useFech';
const CategoryPage = () => {
  const {id}=useParams();
  console.log(id);
  const data=useFetch(`/api/products?populate=*&[filters][caregories][id]=${id}`);
  console.log(data?.data[0]?.attributes?.caregories?.data[0]?.attributes?.title);
  return (
    <div className="category-main-content">
        <div className="layout">
            <div className="category-title ">{data?.data[0]?.attributes?.caregories?.data[0]?.attributes?.title}</div>
            <Products innerPage={true} products={data}/>
        </div>
    </div>
  )
}

export default CategoryPage;