import './null.scss';
import './header.scss';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BsBag } from "react-icons/bs";



export const Header = (props) => {
   return (
      <header className="header">
         <Link className="logo" to='/' alt='logo'>
            <img src='./img/logo.png' alt='logo' />
            <p>Книжная лавка</p>
         </Link>
         <nav>
         
            <ul className="menu">
               <li><Link to='/' alt='книги'>книги</Link></li>
               <li><Link to='/blog' alt='аудиокниги'>аудиокниги</Link></li>
               <li><Link to='/blog' alt='канцтовары и подарки'>канцтовары и подарки</Link></li>
               <li><Link to='/blog' alt='блог'>блог</Link></li>
               <li><Link to='/contacts' alt='контакты'>контакты</Link></li>
            </ul>
            
         </nav>
         <div className="profile">
            
<BsPerson className="profileIcon" onClick ={props.onClickEnter}/>


<AiOutlineHeart className="profileIcon" onClick ={props.onClickFavorite} />

<BsBag className="profileIcon" onClick ={props.onClickDrawer} />



         </div>
      </header>
   )
}