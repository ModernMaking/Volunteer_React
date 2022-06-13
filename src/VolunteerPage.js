import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";
import portrait from './images/portrait.png'
import TopMenu from "./TopMenu";
import VacanceCard from "./VacanceCard";
export default function VolunteerPage(props)
{
    const {id} =useParams();
    return (
        <div>
            <TopMenu/>
            <img src={portrait} style={{float:"left", width:300, height:300, margin:20}}></img>
        <div>
            <br/>
            <p>
                Страница волонтера id{id}
            </p>
            <p style={{fontSize:35}}>
                Иванов Иван Иванович
            </p>
            <p>
                35  лет
            </p>
            <p style={{fontSize:20}}>
                Рейтинг: <p style={{fontSize:20}}>4.7</p>
            </p>
            <div>
                <VacanceCard name="Аниматор на детском утреннике" width="100" height="100"/>
                <VacanceCard name="Водитель детского автобуса" width="100" height="100"/>
            </div>
        </div>
        </div>
    )
}