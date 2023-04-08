import {Stack, Spinner} from 'react-bootstrap';
import CardProd from './CardProd';
// import './AllCards.css'

function Profile() {



    return (
        <div className="MainContent">
        <Stack direction="horizontal" gap={3}>
            <div className='element'><h1>Профиль</h1></div>
            <div className='element'><input className="ms-auto" value={'Выйти'} /></div>
        </Stack>

{/* <Spinner>

</Spinner> */}
        
</div>
    );
}

export default Profile;