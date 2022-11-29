

import { BannerSale } from "../components/bannerSale";
import { CardCategorie } from "../components/cards/cardCategorie";

import { SidebarMenu } from "../components/sidebarMenu";
import '../app.scss';


import { products } from '../components/cards/productsArray';
import { Search } from "../components/search";


export const Home = ({ searchValue, setSearchValue, onChangeSearchInput, onAddtoDrawer, onAddtoFavorite}) => {
   return (
      <div>
         <BannerSale />
         <Search search={searchValue} setSearch={setSearchValue} onChangeSearch={onChangeSearchInput} />
         <div className="main">
            <SidebarMenu />
            <div className="mainCard">

               {products.filter((item) => (item.name.toLowerCase().includes(searchValue.toLowerCase())) || (item.author.toLowerCase().includes(searchValue.toLowerCase()))).map((item) => (
                  <CardCategorie
                     id={item.id}
                     img={item.img}
                     author={item.author}
                     name={item.name}
                     aboutShot={item.aboutShot}
                     price={item.price}
                     onClickAdd={(obj) => onAddtoDrawer(obj)}
                     onClickFavorite={(obj) => onAddtoFavorite(obj)}
                    
                  />))}
            </div>

         </div>
      </div>
   )
}