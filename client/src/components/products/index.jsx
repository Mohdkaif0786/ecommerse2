import './products.css';
import Product from './product/product';
function Products({innerPage,headingText,products}){
     console.log(products);
    return (
        <div className="products-section">
            {!innerPage && <h2 className="sec-head" >{headingText}</h2>}
            <div className="products">
                {
                    products?.data.map(product=>{
                        console.log(product)
                        return(
                            <Product  product={product} key={product.id}  />
                        )
                    })
                }
                
            </div>
        </div>
    )
}
export default Products;