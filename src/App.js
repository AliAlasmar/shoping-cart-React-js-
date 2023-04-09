import logo from './logo.svg';
import './App.css';
import Header from './Front/Header';
import Home from './Pages/Home';
import Products from './Pages/Products';
import { BrowserRouter as Router ,Route ,Routes ,Link } from 'react-router-dom';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <Router>
       <div className="container">
     <Header/>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
    </div>

 

    </Router>
   
  );
}

export default App;
