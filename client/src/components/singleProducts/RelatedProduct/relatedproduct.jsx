import React from 'react'
import Products from '../../products'
import useFetch from '../../../Myhooks/useFech'
function RelatedProduct({categoryId,productId}) {
    const relData=useFetch(`/api/products?populate=*&[filters][id][$ne]=${productId}&[filters][caregories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`);
    // /api/products?populate=*&[filters][caregories][id]=${id}
    console.log(relData);
    return (
        <div className='related-products'>
            <Products headingText={'related products'} products={relData} />
        </div>
    )
}

export default RelatedProduct