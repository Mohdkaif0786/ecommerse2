import './home.css';
import Banner from './banner/banner';
import Category from './category';
import Products from '../products';
import { useEffect } from 'react';
import { fechDataFromApi } from '../../utils/api';
import { useContext } from 'react';
import { Context } from '../../utils/context';
function Home() {
    let {categories,products,setProducts,setCategories}=useContext(Context);
    console.log(products);
    useEffect(()=>{
        getCategoriesData();
        getProductsData();
    },[]);
    const getCategoriesData=()=>{
       fechDataFromApi("/api/caregories?populate=*").then(data=>{
        // console.log(data);
        setCategories(data)
       });
    }
    const getProductsData=()=>{
        fechDataFromApi("/api/products?populate=*").then(data=>{
         console.log(data);
         setProducts(data)
        });
     }
    return (
        <div className="home">
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                <Products headingText={'popular products'} products={products}/>
        
                </div>
            </div>
        </div>
    )
}
export default Home;