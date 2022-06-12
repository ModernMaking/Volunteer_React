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
                 Требования: умение работать с детьми
            </p>
            <p>12 июня, воскресенье 10:00-12:00</p>

            <Button>Откликунуться</Button>

            <p>Москва, ул. Мясницкая, 6</p>

            

            <MapBasics lat="55.76" lon="37.63"></MapBasics>
        </div>
    )
}