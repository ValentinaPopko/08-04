import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Stack} from 'react-bootstrap';
import './cart.css';
import CartProd from './CartProd.js';


function Cart(props) {

    const [openCart, SetOpenCart] = useState(true)
    let styleOverflow = {}
    let styleSideBlock = {}

    if (props.openCart == true){
        styleOverflow = {width: '100%'};
        styleSideBlock = {width: '385px'};
    } else {
        styleOverflow = {width: '0'};
        styleSideBlock = {width: '0'};
    }
 

    
    let flowersCart = [
      // {id: 13, name: 'Букет полевых ромашек', coast: '2690₽', img:'img/ромашки (1).png'},
      // {id: 14, name: 'Букет белых хризантем', coast: '3300₽', img:'img/хризантемы (2).png'},
      // {id: 15, name: 'Букет полевых цветов', coast: '4300₽', img:'img/Букет полевых цветов.png'},
      // {id: 16, name: 'Букет розово-белых тюльпанов', coast: '3300₽', img:'img/тюльпаны.png'},
      // {id: 17, name: 'Букет мимозы', coast: '1800₽', img:'img/мимоза.png'},
      // {id: 18, name: 'Букет лилий', coast: '2500₽', img:'img/лилии.png'},
      // {id: 19, name: 'Сиреневый микс', coast: '4000₽', img:'img/сиреневый микс.png'},
      // {id: 20, name: 'Букет пионов', coast: '3890₽', img:'img/пионы.png'},
      // {id: 21, name: 'Букет подсолнухов', coast: '2500₽', img:'img/подсолнухи.png'},
      // {id: 22, name: 'Букет "Розовая нежность"', coast: '4200₽', img:'img/Нежность.png'},
      // {id: 23, name: 'Букет "Весенняя свежесть"', coast: '4500₽', img:'img/Весенняя свежесть.png'},
      // {id: 24, name: 'Букет красно-белых роз', coast: '8500₽', img:'img/розы (1).png'}
  ]

let cardsCart = props.cart.map(flowerCart => {
  return <CartProd name={flowerCart.name} coast={flowerCart.coast} img={flowerCart.img}></CartProd>
})

    const[ordered, SetOrdered] =  useState(false)
    let content = ordered ? <><img src ='/img/оформлен.png' className='AddCartImg' ></img> <img src ='/img/назад.png' className='AddCartImg'  onClick={()=> SetOrdered(!ordered)}></img> </> : <>{cardsCart} <div className='AddCart'><img   src='img/кнопка.png'   onClick={()=> SetOrdered(!ordered)} /></div></>

    return <>
      <div className='MainCart'>
        <div className='Overflow' style={styleOverflow} onClick={()=> props.onCloseCart()}></div>
        <div className='SideBlock' style={styleSideBlock}>
          
        
          <Stack direction="horizontal" gap={3} id='topCart'>
            <div className="element"><h1><b>КОРЗИНА</b></h1></div>
            
              <div className="element ms-auto"> <img src='img/CloseButton.svg' onClick={()=> props.onCloseCart()}/></div>
          </Stack>

{content}       
        
        </div>
        
        
</div>
      
    </> 
  }

export default Cart
