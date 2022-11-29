
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/header";

import { Drawer } from "./components/drawer";
import { Favorite } from "./components/favorite";
import { Footer } from "./components/footer";
import { Enter } from "./components/enter";
import { useState } from "react";


import { Home } from "./pages/home";
import { Contact } from "./pages/contacts";
import { Blog } from "./pages/blog";




function App() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [drawerItems, setDrawerItems] = useState([]);

  const [favoriteOpened, setFavoriteOpened] = useState(false);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const [enterOpened, setEnterOpened] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  
 

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };


  const onAddtoDrawer = (obj) => {
    setDrawerItems((prev) => [...prev, obj]);


  }

  const onRemoveItem = (id) => {
    setDrawerItems((prev) => prev.filter(item => item.id !== id));


  }

  const onAddtoFavorite = (obj) => {
    setFavoriteItems(prev => [...prev, obj]);
  }

  const onRemoveFavorite = (id) => {
    setFavoriteItems((prev) => prev.filter(item => item.id !== id));


  }


  return (<div>
    {drawerOpened && <Drawer items={drawerItems} onClose={() => setDrawerOpened(false)} onRemove={onRemoveItem} />}

    {favoriteOpened && <Favorite o items={favoriteItems} onClose={() => setFavoriteOpened(false)} onClickAdd={(obj) => onAddtoDrawer(obj) }  onClickFavorite={(obj) => onAddtoFavorite(obj)} onRemove={onRemoveFavorite} />}

    {enterOpened && <Enter onClose={() => setEnterOpened(false)} />}

    <Header onClickDrawer={() => setDrawerOpened(true)} onClickFavorite={() => setFavoriteOpened(true)} onClickEnter={() => setEnterOpened(true)} />
    <Routes>
      <Route element={<Home
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onChangeSearchInput={onChangeSearchInput}
        onAddtoDrawer={onAddtoDrawer}
        onAddtoFavorite={onAddtoFavorite} />} path="/" />
         <Route element={<Contact />} path="/contacts" />
         <Route element={<Blog />} path="/blog" />
    </Routes>
    

    <Footer />

  </div >

  );
}

export default App;
