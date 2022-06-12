
export default function VacanceCard(props)
{
    return (
        <div style={{width:500, height:320, border:"solid", margin:20, flexDirection:"column", display:"inline-block"}}>
            <div style={{width:300, height:200, backgroundImage:`url(${props.img})`}}>
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