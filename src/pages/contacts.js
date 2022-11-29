import { Link } from 'react-router-dom';
import './contacts.scss';

export const Contact = () => {
   return (
      <div className='contacts'>
        <h1>Контакты</h1>
        <div className='contactsAdress'>
        <h2>Адрес:</h2>
        <p>Юридический адрес: 220073, г. Минск, ул. Скрыганова, д. 14, каб. 36.</p>
        <p>Адрес для почтовых отправлений: 220117, Минск-21, а/я 162</p>
        <p>Электронный адрес: <Link>bookshop@gmail.com</Link></p>
        </div>
        <div className='contactsPhone'>
        <h2>Номера телефонов:</h2>
        <p>+37529 140-50-66,</p>
        <p>+37525 140-50-66</p>
        </div>


      </div>



   )
}