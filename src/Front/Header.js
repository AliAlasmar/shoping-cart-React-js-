import React from 'react'
import { BrowserRouter as Router ,Route ,Routes ,Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import CartIcon from '../Components/CartIcon';


function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">CartShop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/cart ">Cart</Link>
        </li>
       
        
      </ul>
      
    </div>
    <CartIcon/>
  </div>
 
</nav>


    </div>
  )
}

export default Header
