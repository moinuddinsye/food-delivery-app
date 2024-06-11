
import { useState } from 'react';
import './App.css'
import FoodDisplay from './FoodDisplay/FoodDisplay';
import Header from './body-components/Header';
import MenuList from './menu-list/MenuList';
import NavigationBar from './nav-bar/NavigationBar';
import LoginComponent from './login-components/LoginComponent';
import DownloadApp from './App-Content/DownloadApp';
import Footer from './Footer/Footer';
import Cart from './Cart/Cart';
function App() {
  const[login,setLogin]=useState(false);
  return(
     <>
      {login ? <LoginComponent setLogin={setLogin}/> : <></>}
      <NavigationBar setLogin={setLogin}/>
      <Header/>
      <MenuList/>
      <FoodDisplay/>
      <DownloadApp/>
      <Footer/>
      
    </>
    
  
  );
}

export default App
