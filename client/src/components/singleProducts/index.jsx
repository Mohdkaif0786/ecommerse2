import { NavLink } from "react-router-dom";
import './singleproduct.css';
import { useContext, useState } from "react";
import RelatedProduct from "./RelatedProduct/relatedproduct";
import { useParams } from "react-router-dom";
import useFetch from "../../Myhooks/useFech";
import { Context } from "../../utils/context";
function SingleProduct() {

    let { handleAddToCart, handleRemoveToCart,cartItems } = useContext(Context);

    // console.log(context);
    let [count, setCount] = useState(1);
    const { id } = useParams();

    const data = useFetch(`/api/products/${id}?populate=*`);
    // categoryId={data.data.attributes.caregories.data[0].id}
    const increment = () => {
        console.log('increment start');
        // console.log(count);
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }


    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="sigle-product">
                    <div className="sigle-product-img">
                        <img src={import.meta.env.REACT_APP_DEV_URL + data?.data?.attributes?.img?.data?.attributes?.url} alt="single-product-img" />
                    </div>
                    <div className="sigle-product-detail">
                        <div className="single-product-name">{data?.data?.attributes?.title}</div>
                        <div className="single-product-price">&#8377;{data?.data?.attributes?.price}</div>
                        <div className="single-product-summary">{data?.data?.attributes?.desc}</div>
                        <div className="sigle-product-user-action-wraper">
                            <div className="increment-container">
                                <div className="inc-btn" onClick={decrement}>-</div>
                                <input type="text" value={count} readOnly />
                                <div className="inc-btn" onClick={increment}>+</div>
                            </div>
                            <div className="addtocart-btn" onClick={() => {
                                    handleAddToCart(data?.data, count);
                                    setCount(0);
                            }}>
                                <i class="bi bi-cart-plus-fill"></i>
                                <p>ADD TO CART</p>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="category-info">
                            <h3>Category:</h3>
                            <p>{data?.data?.attributes?.caregories?.data[0]?.attributes?.title}</p>
                        </div>
                        <div className="sigle-product-link">
                            <h3>Share:</h3>
                            <div className="social-icons">
                                <NavLink className='link link1'>in</NavLink>
                                <NavLink className='link link2'>f</NavLink>
                                <NavLink className='link link3'>
                                    <i class="bi bi-twitter"></i>
                                </NavLink>
                                <NavLink className='link link4'>
                                    <i class="bi bi-instagram"></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProduct productId={data?.data?.id} categoryId={data?.data?.attributes?.caregories?.data[0]?.id} />
            </div>
        </div>
    )
}
export default SingleProduct;

