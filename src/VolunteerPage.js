import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";

export default function VolunteerPage(props)
{
    const {id} =useParams();
    return (
        <div>
            <br/>
            <p>
                Страница волонтера id{id}
            </p>
        </div>
    )
}