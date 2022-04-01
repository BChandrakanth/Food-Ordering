import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './container/FoodItems';
import Cart from './container/Cart';
import data from './container/data';
import { CartProvider } from 'react-use-cart';
const App = () => {
  return (
    <>
    <CartProvider>
  <div className='d-flex flex-row'>
  <ul className="nav flex-column col-2 flex-wrap side">
 <li className='text'>Menu</li>
  </ul>
  <div className='container'>
    <div className='flex-row d-flex flex-wrap cards col-12'>
{data.productData.map((item,index)=>{
  return(
    <FoodItems img={item.img} title={item.title} item={item} key={index} bg={item.bg}/>
  )
})}
</div>
</div>
 <Cart />
  </div>
  </CartProvider>
    </>
  )
}

export default App;
