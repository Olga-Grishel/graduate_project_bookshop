
import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";
import { BannerSale } from "./components/bannerSale";
import { CardCategorie } from "./components/cards/cardCategorie";
import { Header } from "./components/header";
import { SidebarMenu } from "./components/sidebarMenu";
import './app.scss';
import { Drawer } from "./components/drawer";
import { Footer } from "./components/footer";
import { Enter } from "./components/enter";
import { useState } from "react";





function App() {
   const [drawerOpened, setDrawerOpened] = useState(false);
    return (<div>
     {drawerOpened && <Drawer onClose = {() => setDrawerOpened(false)}/> } 
      
      <Header onClickDrawer = {() => setDrawerOpened(true)} />
      <BannerSale />
     
      <div className="main">
        <SidebarMenu />
        
       <CardCategorie />
      </div>
      <Enter />
      <Footer />
    
    </div>

    );
}

export default App;
