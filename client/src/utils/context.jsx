import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

function AppContext({ children }) {
    let [products, setProducts] = useState();
    let [categories, setCategories] = useState();
    let [cartItems, setCartItems] = useState([]);
    let [cartCount, setCartCount] = useState(0);
    let [cartSubTotal, setCartSubTotal] = useState(0);
   
    useEffect(() => {
        let count=0;
        cartItems.forEach(item=>{
            count+=item.attributes.quantity;
          });   
         setCartCount(count);    

      let total=0;
     cartItems.forEach(item=>{
        total+=item.attributes.quantity*item.attributes.price;
      });
      setCartSubTotal(total);
    }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        const index = items.findIndex(p => p.id == product.id);
        if (index !==-1){
            items[index].attributes.quantity+=quantity;
        }
        else{
            product.attributes.quantity=quantity;
            items=[...items,product]
        }
        setCartItems(items);
    }
    const handleRemoveToCart = (product) => {
        console.log(product)
        let items=[...cartItems];
            items=cartItems.filter((item)=>item.id!==product.id);
            setCartItems(items)
    }
    const handleCartQunatity = (type, product) => {
       let items=[...cartItems];
       let index=items.findIndex(p=>p.id==product.id);
       console.log(index);
       if(type=='inc'){
          items[index].attributes.quantity+=1;
       }
       else if(type=='dec'){
          if(items[index].attributes.quantity>1){
            items[index].attributes.quantity-=1;
          }
       }
       setCartItems(items);
    }

    return (
        <Context.Provider
            value={{
                products, categories, setCategories, setProducts,
                cartItems, setCartItems, cartCount, setCartCount,
                cartSubTotal, setCartSubTotal
                , handleAddToCart, handleRemoveToCart, handleCartQunatity
            }}>{children}</Context.Provider>
    )
}
export default AppContext;