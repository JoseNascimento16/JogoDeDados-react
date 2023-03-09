import React from "react"

export default function Dado(props){
    // console.log(props)
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div className="div-dado" style={styles} onClick={()=>props.mantemDice(props.id)}>
            <h1 className="numero-dado">{props.value}</h1>
        </div>
        
    )
}



