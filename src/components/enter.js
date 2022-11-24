import { Link } from "react-router-dom"
import './enter.scss';

export const Enter = () => {
   
   return (
      <div className="enterWrapper">
         <div >
            <h2>Вход в кабинет</h2>
            <form className="enter">
         <input  placeholder='Логин или e-mail'/>
         <input placeholder='Введите пароль'/>
        <Link>Забыли пароль?</Link>
         <button>Войти</button>
         <button>Зарегистрироваться</button>
      </form>
         </div>
      </div>
   )
}