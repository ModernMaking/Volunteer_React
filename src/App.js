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
import {AddVacance}  from './AddVacance';
import main from "./images/main.png";
import {Link} from 'react-router-dom';

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

function goToAddVacance()
{
  return <Link to="/addVacance" />
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
      <header style={{alignContent:"center", alignItems:"center"}}>

        <div style={{backgroundImage:`url(${main})`,width:1000, height:500, alignContent:"normal",alignItems:"center", justifyContent:"center",display:"flex" }}>
          
        <Link to="/addVolunteer">
          <Button style={{alignContent:"center"}}>
            Стать волонтером
          </Button>
          </Link>
        </div>
        

        <Button>
          Стать организатором
        </Button>

        <Link to="/addVacance">
          <Button onClick={goToAddVacance}>
            Попросить о помощи
          </Button>
        </Link>

      </header>

      <div style={{color:"#888888", textAlign:"left",paddingLeft:40, fontSize:25}}>
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




export default App;
