import React from 'react'
import ProductItem from '../Components/ProductItem'
import ApiProducts from '../api/Products.json'
import { useEffect , useState } from 'react'

function Products() {

   let [state ,setState]= useState({
    products :[]
   })

    const getProduct= ()=>{
        return Promise.resolve(ApiProducts)
    }

    useEffect(()=>{
        getProduct().then(result=>{
            setState({
                products : result
            })
            console.log(result)
        })
    },[])
    return (
        <div>
            <h1>Products</h1>
            <div className='row'>
                

               {state.products.map((product,index)=>(
                <div key={index} className={'col-4'}>
                    <ProductItem product={product} key={product.id} />
                </div>
               ))}
            </div>



        </div>
    )
}

export default Products
