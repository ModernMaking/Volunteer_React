import Calendar from "react-calendar";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";
import MapBasics from "./MapBasics";
import styled from "styled-components";
import React from "react";
import Fetch from 'react-fetch'

const Button = styled.button`
background-color: #22CC99;
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
`;

export default function VacancePage(props)
{
    const {id} =useParams();
    return (
        <div>
            <p>
                Страница вакансии id{id}
            </p>
            <p>
                Требуется аниматор на детский праздник
            </p>
            <p>
                 Требования:
                 <Skill name="работа с детьми"></Skill> 
                 <Skill name="актерское мастерство"></Skill> 
            </p>
            <p>12 июня, воскресенье 10:00-12:00</p>

            <Button>Откликунуться</Button>

            <p>Москва, ул. Мясницкая, 6</p>

            

            <MapBasics lat="55.76" lon="37.63"></MapBasics>
            <Fetch url="http://jservice.io/api/random?count=1"><TestComponent/></Fetch>
        </div>
    )
}

function Skill(props)
{
    return (
        <div style={{color: "ActiveBorder",
            backgroundColor: "Background",
            borderBlockStyle:"dotted",
            height: 30, width:120}}>
            {props.name}
        </div>
    )
}

class TestComponent extends React.Component{
    render(){
      console.log(this.props)
      return <p>1</p>
    }
  }