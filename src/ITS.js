import { useState } from "react";
import ITSQuestion from "./ITSQuestion";
import TopMenu from "./TopMenu";





export default function ITS(props)
{
    //let pvalue=''

   


    return (
        <div>
            <TopMenu/>
            <ITSQuestion text="Группа из 30 детей собирается на экскурсию. Сколько должно быть сопровождающих?" variants={[{text:"1",value:"1",hint:"Разве такого количества сопровождающих достаточно для такой группы?", isCorrect:false}, {text:"2",value:"2", hint:"Молодец!!! Правильно", isCorrect:true}, {text:"4",value:"4", hint:"А не слишком ли много?", isCorrect:false}]} />
        </div>
    )
}