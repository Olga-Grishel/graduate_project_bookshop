import './null.scss';
import './header.scss';
import { Link } from 'react-router-dom';



export const Header = (props) => {
   return (
      <header className="header">
         <Link className="logo" href='#' alt='logo'>
            <img src='./img/logo.png' alt='logo' />
            <p>Книжная лавка</p>
         </Link>
         <nav>
            <ul className="menu">
               <li><Link href='#' alt='книги'>книги</Link></li>
               <li><Link href='#' alt='аудиокниги'>аудиокниги</Link></li>
               <li><Link href='#' alt='канцтовары и подарки'>канцтовары и подарки</Link></li>
               <li><Link href='#' alt='блог'>блог</Link></li>
               <li><Link href='#' alt='блог'>о нас</Link></li>
            </ul>
         </nav>
         <div className="profile">
            
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="about"><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></g></svg>


<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>

<svg onClick ={props.onClickDrawer} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M372.83,450h-261a15,15,0,0,1-15-15V150.57a15,15,0,0,1,15-15h261a15,15,0,0,1,15,15V435A15,15,0,0,1,372.83,450Zm-246-30h231V165.57h-231Z"/><path d="M300.82,218a15,15,0,0,1-15-15V121.5a43.51,43.51,0,0,0-87,0V203a15,15,0,0,1-30,0V121.5a73.51,73.51,0,0,1,147,0V203A15,15,0,0,1,300.82,218Z"/></g></svg>

         </div>
      </header>
   )
}