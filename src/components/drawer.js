import './null.scss';
import './drawer.scss';

export const Drawer = (props) => {
   return (

      <div className='overlay'>
         <div className='drawer'>
            
               <h1>Корзина</h1>
           
           
            <div className='cartItem'>
               <img src='' alt=''></img>
               <div>
                  <p>name</p>
                  <p>price</p>
               </div>
               <button>Удалить</button>
            </div>
            <div className='cartTotal'>
               
                  <span>Итого:</span>
                  <div></div>
                  <span>Цена</span>
               
               
            </div>
            <button>Оформить заказ</button>
            <button onClick={props.onClose}>Закрыть корзину</button>
         </div>

      </div>
   )
}