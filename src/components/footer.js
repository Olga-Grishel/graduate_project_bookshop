import './null.scss';
import './footer.scss';
import {  Link} from "react-router-dom";




export const Footer = () => {
   return (
      <footer className="footer">
         <Link  to='/' className="logo" href='#' >
            <img src='./img/logo.png' alt='logo' />
            <p>Книжная лавка</p>
         </Link>
        <Link>bookshop@gmail.com</Link>
        <div>
        <p>+37529 140-50-66,</p>
        <p>+37525 140-50-66</p>
        </div>
        
      </footer>
   )
}