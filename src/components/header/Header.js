import Stack from 'react-bootstrap/Stack';
import './Header.css'
import {Link} from 'react-router-dom'


function Header(props) {

    return <div className='mainHeader'>

    <Stack direction="horizontal" gap={3}>
    <div className='leftHeader'>
      <img src="/img/icon (1).png" width={42} height={42}/>
      <div className='leftHeaderText'>
        <h5>FLOWER HOUSE</h5>
        <p>Магазин лучших цветов</p>
      </div>
    </div>

      <div className='rightHeader ms-auto'>

        <img src="/img/Group.svg" width={20} height={20} onClick={() => props.onOpenCart()}/>
        <span> 1500 р.</span>
        <Link to='/Profile' >
        <img src="/img/Union.svg" width={20} height={20}/>
        </Link>

        <Link to='/Fav'>
        <img src="/img/Favorite.svg" width={20} height={20}/>
        </Link>
      </div>
    </Stack>



    </div>

  }

export default Header