import { useState } from 'react';
import {Card, Stack} from 'react-bootstrap';
import './CardProd.css'


function CardProd(props) {

  const [addedCart, SetAddedCart] = useState(false)
  const [AddToFav, SetAddToFav] = useState(false)

function clickAddButton(newProd){
  SetAddedCart(!addedCart);
  props.addProdToCart(newProd)
}

function clickAddFav(newFav){
  SetAddToFav(!AddToFav);
  props.addProdToFav(newFav)
}

  return (
    <Card style={{ width: '210px' }} id='cardcss' addProdToCart={(NEWPROD) => props.addProdToCart(NEWPROD)}>
      <img id='AddToFavButton' src={AddToFav ? './img/like.png' : './img/heart.png'} addProdToFav={(newFav) => props.addProdToFav(newFav)} onClick={() => clickAddFav({id: props.id, name: props.name, coast: props.coast, img: props.img})}></img>
      <Card.Img id='imgfl' style={{ width: '120px', height: '132px', marginTop: '10px'}} variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className="Flower">{props.name}</Card.Title>
        <Stack direction="horizontal" gap={3}>
        <div ><p className='priceName'>ЦЕНА:</p><span className='price'>{props.coast}</span></div>
        <div className=" ms-auto">
          <img src={addedCart ? './img/галочка.svg' : './img/AddCard.svg'} onClick={() => clickAddButton({id: props.id, name: props.name, coast: props.coast, img: props.img})}/>
        </div>
    </Stack>
      </Card.Body>
    </Card>
  );
}

export default CardProd;