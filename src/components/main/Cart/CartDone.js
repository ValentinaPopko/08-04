import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Stack} from 'react-bootstrap';
import './CartDone.css';


function CartDone() {

    return <>
      <div className='MainCart'>

      <Stack direction="horizontal" gap={3} id='topCart'>
            <div className="element"><h1><b>КОРЗИНА</b></h1></div>
              <div className="element ms-auto"> <img src='img/CloseButton.svg' onClick={()=> SetOpenCart(false)}/></div>
        </Stack>

    <div className='Done'><img src='img/оформлен.png' /></div>  
    <div className='Back'><img src='img/кнопка.png' /></div>
        
</div>
      
    </> 
  }

export default CartDone