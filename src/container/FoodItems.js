import React from 'react'
import { useCart } from 'react-use-cart';
import icon2 from '../images/NicePng_love-icon-png_4211610.png'
import icon1 from '../images/star.png'
const FoodItems = (props) => {
  const { addItem } = useCart();
  return (
   <>
<div className='bg flex-wrap'>
<div className='card' id='card1' style={{backgroundColor:props.bg}}>
  <div className='d-flex flex-row justify-content-between'>
    <div className='StarPng'>
        <img src={icon1} className='star'/>
        <span style={{height:'fit-content',color:'white',marginLeft:'5px'}}>4.5</span>
    </div>
    <div className='fav'> <img className='m-1' src={icon2}  width='20px'/></div>
    </div>
    <div className='d-flex align-items-center justify-content-center'>
<img src={props.img} className='align-content-center' width='80px'/>
</div>
<div className='position-absolute bottom-card'>
  <p className='mt-1'>{props.title}<span className='m-2 bg-body rounded-2 small p-1 opacity-75'>250gm</span></p>
  <div className='d-flex flex-row'>
  <h6 className='price mb-2'>$6.00</h6>
  <button className='btn btn-success' onClick={() => addItem(props.item)}>Add</button>
  </div>
</div>
</div>

</div>
</>
  )
}

export default FoodItems;