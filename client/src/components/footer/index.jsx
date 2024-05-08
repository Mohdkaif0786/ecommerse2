import NewsLetter from "../newsletter";
import PaymentImg from '../../assets/payments.png'
import './footer.css';
import { useNavigate } from "react-router-dom";
import useFetch from "../../Myhooks/useFech";
import { useEffect, useState } from "react";
import { fechDataFromApi } from "../../utils/api";
function Footer() {
    let navigate = useNavigate();
    let [key, setKey] = useState("");
    // let data = useFetch(`/api/caregories?populate=*&filters[title][$eq]=${key}`);
    const clickHandler = (e) => {
        // navigate("/category/3");
        setKey(e.target.textContent);
    }
    useEffect(() => {
        getCategoriesData();
    }, [key]);

    const getCategoriesData = () => {
         fechDataFromApi(`/api/caregories?populate=*&filters[title][$eq]=${key}`).then(data => {
            if(data?.data?.length>0){
                navigate(`/category/${data?.data[0]?.id}`);
            }
            
        }); 
    }
    return (
        <footer className="footer-section">
            <div className="footer-content ">
                <div className="footer-col footer-c-1">
                    <h3>About</h3>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos assumenda architecto blanditiis alias enim consectetur ea corporis sit ipsa.</div>
                </div>
                <div className="footer-col footer-c-2">
                    <h3>Contact</h3>
                    <div className="contact-items">
                        <div className="contact-item">
                            <i class="bi bi-send-fill"></i>
                            <div className="contact-item-text text">
                                Kayaloram Rd, Punnamada, Kottankulangara,
                                Kerala, 688006
                            </div>
                        </div>
                        <div className="contact-item">
                            <i class="bi bi-phone"></i>
                            <div className="contact-item-text text">
                                Phone: 0471 272 0261
                            </div>
                        </div>
                        <div className="contact-item">
                            <i class="bi bi-envelope-fill"></i>
                            <div className="contact-item-text text">
                                Phone: kmd060463@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-col footer-c-3">
                    <h3>Categories</h3>
                    <div className="text" onClick={clickHandler}>Headphones</div>
                    <div className="text" onClick={clickHandler}>Smart Watches</div>
                    <div className="text" onClick={clickHandler}>Blutooth Speakers</div>
                    <div className="text" onClick={clickHandler}>Wireless Earbuds</div>
                    <div className="text" onClick={clickHandler}>Home Theatre</div>
                    <div className="text" onClick={clickHandler}>Projectors</div>
                </div>
                <div className="footer-col footer-c-4">
                    <h3>Pages</h3>
                    <div className="text">Home</div>
                    <div className="text">About</div>
                    <div className="text">Privacy Policy</div>
                    <div className="text">Returns</div>
                    <div className="text">Term & Conditions</div>
                    <div className="text">Contact Us</div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-text">
                    YOURSTORE 2024 CREATED BY KAIF. PREMIUM E-COMMERSE
                </div>
                <img src={PaymentImg} alt="" />
            </div>
        </footer>
    )
}
export default Footer;