import React from 'react'
import BannerImg from '../../../assets/banner-img.png';
import './banner.css';
const Banner = () => {
  return (
    <div className="hero-banner">
        <div className="hero-banner-content">
            <div className="hero-banner-text-content">
                <h1>SALES</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eum cum voluptatem sapiente.</p>
                <div className="hero-banner-butnWraper">
                    <button className='hero-btn1'>READ MORE</button>
                    <button className='hero-btn2'>SHOP NOW</button>
                </div>
            </div>
            <img src={BannerImg} alt="" />
        </div>
    </div>
  )
}

export default Banner