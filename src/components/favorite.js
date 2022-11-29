import './null.scss';
import './favorite.scss';
import { useState } from 'react';

export const Favorite = ({id, img, name, price, onClose, onClickAdd, items = [], onRemove }) => {
   
   const [isAdded, setIsAdded] = useState(false);

   const onClickAddDrawer = () => {
      onClickAdd({ id, img, name, price });
      setIsAdded(!isAdded)
    }

   return (

      <div className='overlay'>
         <div className='favorite'>

            <h1>Закладки</h1>


            <div className='favoriteItem'>
               {items.map(({id, img, name, price}) => (
                  <div key={id} className='favoriteItemPart'>
               <img src={img} alt=''></img>
               <div>
                  <h2>{name}</h2>
                  <p>{price} руб.</p>
               </div>
               <div className='favoriteItemPartBtn'>
               <button onClick={() => onRemove(id) }>&#10006;</button>
               <button onClick={(obj) => onClickAddDrawer(obj) } >Добавить в корзину</button>
               </div>
               </div>))}
               </div>
            
            
            <button onClick={onClose}>Закрыть закладки</button>
         </div>

      </div>
   )
}