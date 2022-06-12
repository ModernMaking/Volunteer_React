import { useState } from "react";





export default function ITS(props)
{
    //let pvalue=''

    function selectedLess(event)
    {
        //alert("Разве такого количества сопровождающих достаточно для такой группы детей?")
        setPValue("Разве такого количества сопровождающих достаточно для такой группы детей?")
        setColor('#FF0000')
    }

    function selectedNorm(event)
    {
        //alert("Молодец!!! Правильно!!!")
        setPValue("Молодец!!! Правильно!!!")
        setColor('green')
    }


    function handleChange(event) {
        setValue(event.target.value);
        if (event.target.value<2)
            selectedLess();
            else
            selectedNorm();
    }


    const [value, setValue] = useState('');
    const [pvalue, setPValue] = useState('');
    const [color, setColor] = useState('');


    return (
        <div>
            <p style={{fontSize:50}}>
                Группа из 30 детей собирается на экскурсию. Сколько должно быть сопровождающих?
            </p>
            <select style={{fontSize:30}} value={value} onChange={handleChange}>
                <option selected="true">Выбрать ответ</option>
                <option onSelect={selectedLess}>1</option>
                <option onSelect={selectedLess}>2</option>
                <option onSelect={selectedNorm}>3</option>
            </select>
            <p style={{fontSize:30, color:{color}}}>{pvalue}</p>
        </div>
    )
}