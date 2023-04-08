import logo from './logo.svg';
import './App.css';
import User from './User';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
function App() {

  let str1 = 'New Year 1';
  let str2 = 'New Year 2';
  const name = 'user';
  const  age = '30';

  const num1 = 3;
  const num2 = 2;

  const name2 = 'Josh';
  const surname = 'Beauchamp ';

  const num = 4;

  const arr = [1, 2, 3, 4, 5];

  const obj = {name: 'Josh', surname: 'Beauchamp'};

  const li1 = <li>text1</li>;
  const li2 = <li>text2</li>;
  const li3 = <li>text3</li>;

  const isAdult = true;
  let text;
  if (isAdult) {
    text='welcome';
  } else{
    text = 'bye';
  }

  const isAdmin = true;
  let slova;
  if (isAdmin) {
    slova= <div><p>new</p><p>year</p></div>;
  } 


// 24/12/22
const vozrast = 19;
const isAuth = true;
function NameUser(name){
  return <><p>Добро пожаловать, {name}</p></>
}

function show1(){
  alert(1);
}
function show2(){
  alert(2);
}
function show3(){
  alert(3);
}

const arr5 = [
  <li>1</li>,
  <li>2</li>,
  <li>3</li>,
  <li>4</li>,
  <li>5</li>,
]


const arr6 = ["елка", "гирлянда", "шар", "звезда", "шапка деда мороза"];

const res = arr6.map(function(item) {
return <li>{item}</li>;
});


  return (
    
  <div>
    <Header/>
  <p>Скоро Новый Год</p>
  <p>Мандарины, ёлка, подарки</p>
  <p>Осталось 3 недели</p>


  <p>{str1}</p>
  <p>{str2}</p>
  <p>name: {name};</p>
  <p>age: {age};</p>
  <p>{num1 ** num2}</p>
  <p>{name2 + "_" + surname}</p>
  <p>{num ** (1/2)}</p>

  

  <ul>
    <li>{arr [0]}</li>
    <li>{arr [1]}</li>
    <li>{arr [2]}</li>
    <li>{arr [3]}</li>
    <li>{arr [4]}</li>
  </ul>

  <p>name: <span>{obj.name}</span>, <br></br>
  surname: <span>{obj.surname}</span> </p>

  <ul>
    {li1}
    {li2}
    {li3}
  </ul>

<p>{text}</p>
<p>{slova}</p>


  <input></input>
  <br/>
  <input></input>
  <br/>
  <input></input>
  <br/>
  <User/>
  <ul>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
  </ul>
  <User/>
  <Main/>
  <tbody>
    <table border = "1">
    <tr>
      <td>Новый Год</td>
      <td>Новый Год</td>
      <td>Новый Год</td>
      
    </tr>
    <tr>
    <td>Новый Год</td>
    <td>Новый Год</td>
    <td>Новый Год</td>

    </tr>
    <tr>
    <td>Новый Год</td>
    <td>Новый Год</td>
    <td>Новый Год</td>

    </tr>
    </table>
  </tbody>

  <p className = "new1">Скоро Новый Год</p>
  <p className = "new2">Мандарины, ёлка, подарки</p>
  <p className = "new3">Осталось 3 недели</p>





{vozrast>18 ? 'поздравляем, вы старый': 'поздравляем, вы молодой' }
{isAuth && <p>вы авторизованы</p>}

{NameUser("Валентина")}

<button onClick={show1}>act1</button> 
<button onClick={show2}>act2</button> 
<button onClick={show3}>act3</button> 

<ul>{arr5}</ul>

{res}


<User/>
<Footer/>



  </div>
  );
}

export default App;


