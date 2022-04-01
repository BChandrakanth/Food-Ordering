import React from 'react';
import { useCart } from 'react-use-cart';
const Cart = () => {
  const {
   isEmpty,
   totalUniqueItems,
   items,
   totalItems,
   cartTotal,
   updateItemQuantity,
   removeItem,
   emptyCart
  } = useCart();
  console.log(useCart);
 return(
   <section className='container col-2' id='contain'>
<div className='row d-flex justify-content-center m-1'>
<h4>My Order</h4>
<table className='table'>
<tbody className='m-2'>
  {items.map((item,index)=>{
    return(
      <tr key={index} className='d-flex row'>
        <td className='d-flex'>
          <img src={item.img} width='40px' height='40px' className='justify-content-center mt-2'/>
          <span className='m-2' id='txt'>
            <p>{item.title}</p>
            <span className='span'>250</span>
          </span>
          <span className='ms-2 tab'>
           <button id='btn' onClick={()=>{
             updateItemQuantity(item.id,item.quantity - 1)
           }}> - </button>
           {item.quantity}
           <button id='btn' onClick={()=>{
             updateItemQuantity(item.id,item.quantity + 1)
           }}> + </button>
          </span>
          
           <p className='priceTxt'>${item.price}.00</p>
          
        </td>
        
      </tr>
    )
  })}
 
</tbody>
</table>
<div>
    <h4 className='text-center' >Total: ${cartTotal}</h4>
  </div>
<div id='check'>
  <button className='btn-success ms-5 button' >CheckOut</button>
</div>
</div>

</section>
 )
}

export default Cart;