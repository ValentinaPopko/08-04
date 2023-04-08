import {Stack} from 'react-bootstrap';
import CardProd from './CardProd';
import './AllCards.css'

function Fav(props) {

    let flowers = [
        {id: 1, name: 'Букет полевых ромашек', coast: '2690₽', img:'img/ромашки (1).png'},
        {id: 2, name: 'Букет белых хризантем', coast: '3300₽', img:'img/хризантемы (2).png'},
        {id: 3, name: 'Букет полевых цветов', coast: '4300₽', img:'img/Букет полевых цветов.png'},
        {id: 4, name: 'Букет розово-белых тюльпанов', coast: '3300₽', img:'img/тюльпаны.png'},
        {id: 5, name: 'Букет мимозы', coast: '1800₽', img:'img/мимоза.png'},
        {id: 6, name: 'Букет лилий', coast: '2500₽', img:'img/лилии.png'},
        {id: 7, name: 'Сиреневый микс', coast: '4000₽', img:'img/сиреневый микс.png'},
        {id: 8, name: 'Букет пионов', coast: '3890₽', img:'img/пионы.png'},
        {id: 9, name: 'Букет подсолнухов', coast: '2500₽', img:'img/подсолнухи.png'},
        {id: 10, name: 'Букет "Розовая нежность"', coast: '4200₽', img:'img/Нежность.png'},
        {id: 11, name: 'Букет "Весенняя свежесть"', coast: '4500₽', img:'img/Весенняя свежесть.png'},
        {id: 12, name: 'Букет красно-белых роз', coast: '8500₽', img:'img/розы (1).png'}
    ]

let cards = props.fav.map(flower => {
    return <CardProd name={flower.name} coast={flower.coast} img={flower.img}></CardProd>
})

    return (
        <div className="MainContent">
        <Stack direction="horizontal" gap={3}>
            <h1>ИЗБРАННОЕ</h1>
            <input className="ms-auto" />
        </Stack>

        <div className="Cards">
        {cards}
      </div>
</div>
    );
}

export default Fav;