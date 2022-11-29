import './null.scss';
import './drawer.scss';
import { useEffect,  useState } from 'react';

export const Drawer = ({ onClose, items = [], onRemove }) => {
   const cost = items.reduce((sum, item) => Math.round((sum + Number(item.price))*100)/100,  0)

   return (
     
   <div className='overlay'>
      <div className='drawer'>

         <h1>Корзина</h1>


         <div className='cartItem'>
            {items.map(({ id, img, name, price, }) => (
               <div key={id} className='cartItemPart'>
                  <img src={img} alt=''></img>
                  <div>
                     <h2>{name}</h2>
                     <p>{price} руб.</p>
                  </div>
                  <div>
                     <button onClick={() => onRemove(id)} className='cartItemPartBtn'>&#10006;</button>
                  </div>
               </div>))}
         </div>
         <div className='cartTotal'>

            <span>Итого:</span>
            <div>{cost}</div>
            <span>руб.</span>


         </div>
         <button>Оформить заказ</button>
         <button onClick={onClose}>Закрыть корзину</button>
      </div>

   </div>
   )
}