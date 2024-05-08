import CartItems from './CartItems/cartItems';
import './cart.css';
import { Context } from '../../utils/context';
import { useContext } from 'react';
function Cart({ setShowCart }) {
    const { cartSubTotal,cartItems } = useContext(Context);
    console.log("sub-total", cartSubTotal)

    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">SHOPINNG CART</span>
                    <div className="close-btn" onClick={() => setShowCart(false)}>
                        <span>&#10005;</span>
                        <span>CLOSE</span>
                    </div>
                </div>

                {
                    cartItems.length == 0 ?
                        <div className="cart-empty-state">
                            <i class="bi bi-cart-x"></i>
                            <span className="empty-state-msg">No product in cart</span>
                            <div className="return-shop-btn">RETURN TO SHOP</div>
                        </div>
                        :

                        <>
                            <CartItems />

                            <div className="cart-footer">
                                <div className="cart-footer-info">
                                    <h3>subtotal</h3>
                                    <div className="subtotal-price">&#8377;{cartSubTotal}</div>
                                </div>
                                <div className="checkout-btn-wraper">
                                    <div className="checkout-btn">checkout</div>
                                </div>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}
export default Cart;