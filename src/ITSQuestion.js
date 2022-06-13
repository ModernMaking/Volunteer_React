import { useState } from "react"
export default function ITSQuestion(props)
{
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
        setDisabled(true)
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
    const [disabled, setDisabled] = useState('');
    const [upperDisabled, setUpperDisabled] = useState('');

    return(
        <div style={{padding:20}}>
                <p style={{fontSize:50}}>
                    {props.text}
                </p>
                    <select disabled={disabled} style={{fontSize:30}} value={value} onChange={(event)=>{
                        setValue(event.target.value);
                        props.variants.map(variant => {
                            if (event.target.value==variant.value)
                            {
                                setPValue(variant.hint)
                                if (variant.isCorrect==true)
                                    setDisabled(true)
                            }
                        }
                            ) 
                        
                        }}>
                        <option selected="true" disabled={upperDisabled}>Выбрать ответ</option>
                        {
                            props.variants.map(variant => 
                            <option onSelect={()=>{{upperDisabled=true; pvalue=variant.hint; this.disabled=variant.isCorrect;}}} value={variant.value} >
                                {variant.text}
                            </option>
                        )}

                </select>
                <p style={{fontSize:30, color:{color}}}>{pvalue}</p>
            </div>
    )
}