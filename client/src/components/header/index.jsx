import { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../cart";
import Search from "./search/search";
import './header.css';

import { Context } from "../../utils/context";

function Header() {

    const { cartCount } = useContext(Context);

    let [scrolled, setScrolled] = useState(false);
    let [showCart, setShowCart] = useState(false);
    let [showSearch, setShowSearch] = useState(false);
    let [showMenu, setShowMenue] = useState(false);
    const scrollHandler = () => {
        let offset = window.scrollY;

        if (offset > 250) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
    }, []);

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-menue' : ''}`}>
                <div className="content-header">
                    <ul className={`menu-wraper ${showMenu ? 'show-menue' : ''}`}>
                        <li><NavLink className={'link'} onClick={() => setShowMenue(false)} to={"/"}>HOME</NavLink></li>
                        <li><NavLink className={'link'} onClick={() => setShowMenue(false)} to={"/about"}>ABOUT</NavLink></li>
                        <li><NavLink className={'link'} onClick={() => setShowMenue(false)} to={"/category"}>CATEGORIES</NavLink></li>
                        <div className="close-btn" onClick={()=>setShowMenue(false)} >
                            <span>&#10005;</span>
                        </div>
                    </ul>
                    <div className="logo"><NavLink className={"link"} to={'/'}>YOUR<span>STORE</span></NavLink></div>
                    <div className="header-icons">
                        <NavLink className={'link'} onClick={() => setShowSearch(true)}><i class="bi bi-search"></i></NavLink>
                        <NavLink className={'link'}><i class="bi bi-suit-heart"></i></NavLink>
                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                            <i class="bi bi-cart"></i>
                            {cartCount > 0 && <span>{cartCount}</span>}
                        </span>
                        <span className="menue-bar " onClick={() => setShowMenue(!showMenu)}>
                            <i class="bi bi-list"></i>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    )
}

export default Header;