import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Header from './components/header/Header.js';
import './App.css';
import Slider from './components/main/Slider.js';
import AllCards from './components/main/AllCards.js';
import Cart from './components/main/Cart/cart.js';
import { Route, Routes } from 'react-router-dom';
import Fav from './components/main/Fav.js';
import Profile from './components/main/Profile.js';

function App() {

  const [openCart, SetOpenCart] = useState(false)
  const [cart, setCart] = useState ([]);
  const [fav, setFav] = useState ([]);

  function addProdToCart(newProd){
    setCart(prev => [...prev, newProd])
  }

  function addProdToFav(newFav){
    setFav(prev => [...prev, newFav])
  }
                                                            
    return <div>
      <Cart openCart={openCart} onCloseCart={() => SetOpenCart (false)} cart={cart} />
      <Header onOpenCart={() => SetOpenCart (true)}/>
      {/* <Slider />
      <AllCards  /> */}
      
      <Routes>
        <Route path='/'element={<><Slider /> <AllCards addProdToCart={(NEWPROD) => addProdToCart(NEWPROD)} addProdToFav={(newFav) => addProdToFav(newFav)}/></>}></Route>
        <Route path='/Fav' element={<><Fav  fav={fav} addProdToFav={(newFav) => addProdToFav(newFav)} /></>}></Route>
        <Route path='/Profile' element={<><Profile /></>}></Route>
      </Routes>

    </div>
  }

export default App


