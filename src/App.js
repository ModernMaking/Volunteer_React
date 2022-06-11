import logo from './logo.svg';
import './App.css';

import {
  DatePicker,
  DatePickerProvider,
  useDatePickGetter,
  useDatePickReset,
} from '@bcad1591/react-date-picker';
import Calendar from 'react-calendar';
import styled from "styled-components";


import Menu, { SubMenu, MenuItem } from 'rc-menu';

import VacanceCard from './VacanceCard';
import { createRoot } from 'react-dom/client';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

import main from "./images/main.png";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);



function App() {

 

  const Button = styled.button`
  background-color: #FFAAAA;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const EnterButton = styled.button`
background-color: white;
color: black;
font-face: "MS Comic Sans";
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
`;

const RegisterButton = styled.button`
background-color: #FFFFCC;
color: black;
font-face: "MS Comic Sans";
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
`;

function clicked()
{
  alert("volunteer")
}


  return (
    <div className="App">
  
     <Menu>
        <a href="dd.html"> Добрые дела </a>
        <a href="dd.html"> Новости</a>
        <a href="dd.html"> Проекты </a>
        <a href="dd.html"> Организаторы </a>
        <a href="dd.html"> Волонтеры </a>
    </Menu>
    <EnterButton>
      Войти
    </EnterButton>
    <RegisterButton>
      Зарегистрироваться
    </RegisterButton>
      <header className="App-header">

        <div style={{backgroundImage:`url(${main})`,width:1000, height:500, alignContent:"normal",alignItems:"center", justifyContent:"center",display:"flex" }}>
          <Button onClick={clicked} style={{alignContent:"center"}}>
            Стать волонтером
          </Button>
        </div>
        

        <Button>
          Стать организатором
        </Button>

        <Button>
          Попросить о помощи
        </Button>

      </header>

      <div style={{color:"#888888", textAlign:"center",fontSize:25}}>
        <p>
          Какие вещи принимают в детские дома?
        </p>
        <p>
          Как обстоят дела в собачьих питомниках?
        </p>
        <p>
          У меня мало свободного времени но я хочу помогать        </p>
          <p>
            Пройди интерактивные курсы и узнай все быстро в игровой форме
          </p>
      </div>

      <div>
        <header style={{fontSize:20}}>Что такое волонтерство?</header>
      </div>

      <div>
        <p>
          Добрые дела рядом
        </p>
        <VacanceCard name="card1" text="ttttttttttt" img="main.png"/>
        <VacanceCard name="card2" text="hhhhhhhhhh" img="main.png"/>
      </div>
      
    </div>
  );
}


root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="l" element={<p>123</p>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
