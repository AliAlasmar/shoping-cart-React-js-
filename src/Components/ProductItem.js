import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem(props) {
    return (

        <div className="card" >
            <img src={props.product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.product.name}</h5>
                <p className="card-text">Price : {props.product.price}$</p>
                <Link to={"/product/"+props.product.id} className="btn btn-primary">Detalis</Link>
            </div>
        </div>

    )
}

export default ProductItem
