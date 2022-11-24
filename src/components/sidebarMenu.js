import {  Link} from "react-router-dom";

import './null.scss';
import './sidebarMenu.scss';

const menuSidebar = [
   { id: 1, value: "Бестселлеры", url: '/' , element: "bestsellers"},
   { id: 2, value: "Новинки", url: '#', element: "new" },
   { id: 3, value: "Нехудожественная литература", url: '#', element: "nonfiction" },
   { id: 4, value: "Художественная литература", url: '#', element: "fiction" },
   { id: 5, value: "Детская литература", url: '#', element: "children" },
   { id: 6, value: "Бизнесс литература", url: '#', element: "business" },
   { id: 7, value: "Учебная литература", url: '#', element: "education" },
   { id: 8, value: "Психология", url: '#', element: "psychology" },
   { id: 9, value: "Комиксы и манга", url: '#', element: "comics" },
   { id: 10, value: "Изучение иностранных языков", url: '#' , element: "foreignLanguages"},
   { id: 11, value: "Медицина", url: '#', element: "medicine" },
   { id: 12, value: "Кулинария и напитки", url: '#' , element: "cooking" },
   { id: 13, value: "Красота, здоровья, спорт", url: '#' , element: "beauty" },
   { id: 14, value: "Компьютеры и интернет", url: '#' , element: "computers and the Internet" },

];

export const  SidebarMenu = () => {
   return (
      <aside>
         <div className="sidebarMenu">
         <ul>
        {menuSidebar.map((props) => (
          <li key={props.id}>
            <Link to={props.url}>{props.value}</Link>
          </li>
        ))}
      </ul>
      </div>
      </aside>
   )
}
