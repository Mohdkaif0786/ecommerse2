import { NavLink } from "react-router-dom";
import newsletterImg from '../../assets/newsletter-bg.jpeg';
import './newsletter.css';
function NewsLetter() {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <h2>NEWSLETTER</h2>
                <h1>SIGN UP FOR LATEST UPDATES AND OFFERS</h1>
                <div className="newsletter-subcribe-box">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <p className='newsletter-para'>Will be used in accordance with our Privacy Policy</p>
                <div className="social-icons">
                    <div className="social-icon"><NavLink className='link'>in</NavLink></div>
                    <div className="social-icon social-icon-facebook"><NavLink className='link'>f</NavLink> </div>
                    <div className="social-icon"><NavLink className='link'><i class="bi bi-twitter"></i></NavLink></div>
                    <div className="social-icon"><NavLink className='link'><i class="bi bi-instagram"></i></NavLink></div>
                </div>
            </div>
            
        </div>
    )
}
export default NewsLetter;
