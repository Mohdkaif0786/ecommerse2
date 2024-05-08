import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './components/home';
// import Category from './components/category';
import Product from './components/products';
import SingleProduct from './components/singleProducts';
import Header from './components/header';
import Footer from './components/footer';
import NewsLetter from './components/newsletter';
import CategoryPage from './components/CategoryPage/Category';
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <Header/>
       <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/category/:id' element={<CategoryPage/>} />
            <Route path='/product/:id' element={<SingleProduct/>} />
            {/* <Route path='/' element={} /> */}
       </Routes>
       <NewsLetter/>
       <Footer/>
    </>

  )
}

export default App
