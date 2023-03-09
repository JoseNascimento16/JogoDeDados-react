import React from "react"

export default function Header(props){
    return(
        <header className="header">
            {!props.tenzie ? <h2>Roleta numérica</h2> : <h2>Parabéns!!</h2>}
            {!props.tenzie ? 
                <p>Rolete os dados até que todos estejam iguais. Clique no dado para congelar</p> :
                <p>Você venceu!!</p>}
        </header>
    )
}
