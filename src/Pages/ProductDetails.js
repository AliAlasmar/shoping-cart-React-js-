import React from 'react'
import { useParams } from 'react-router'
import ApiProducts from '../api/Products.json'
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'

function ProductDetails() {
   const {id} = useParams()

   let [state ,setState]= useState({
    products :[],
    load : true,
    quintity : 1
   })
   const getProductById= ()=>{
     let product = ApiProducts.find(item => item.id == id)
    return Promise.resolve(product)
}
let styles= {
    width:'40%',
    float : 'right',
    marginLeft:'50%',
    marginBottom:'1%'
}
useEffect(()=>{
    getProductById().then(result=>{
      setTimeout(()=>{
        setState({
            ...state,
            products : result,
            load : false
        });
        console.log(result)
    },1000)
      })
},[])

const updateQty = (event)=>{
    if(event.target.value <0){
   return
    }
  setState({
    ...state,
    quintity: event.target.value
  })
}
  return (
    <div>
        { state .load ? 'loading ....':
        <div className="row" >
            <div className='col-6'>
            <img src={state.products.image} className="card-img-top " alt="..." />
         
            </div>
            <br/>
         <div className="card-body col-6">
            <h3 className="card-title">{state.products.name}</h3><br/>
            <p className="card-text">
                <h3>Price :</h3> {state.products.price}$</p>
            <p  className="card-text"><h3>Description :</h3>
             {state.products.description}</p>
             <br/>
        </div>
  <br/>
  
    <br/>
    <input type="number" style={styles} value={state.quintity} onChange={updateQty}/>
    <p style={styles}>Total price  :  
      {state.quintity * state.products.price}</p>
        <button  style={styles} className="btn btn-primary">
                            Add to Cart
                        </button>

    </div>
    
        }
         
    </div>
  )
}

export default ProductDetails
