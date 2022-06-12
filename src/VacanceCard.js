
export default function VacanceCard(props)
{
    return (
        <div style={{width:props.width, height:props.heigth, border:"solid", margin:20, flexDirection:"column", display:"inline-block"}}>
            <div style={{width:props.width, height:props.heigth/2, backgroundImage:`url(${props.img})`}}>
            </div>
            <p>
                {props.name}
            </p>
            <p>
                {props.text}
            </p>
        </div>
    )
}