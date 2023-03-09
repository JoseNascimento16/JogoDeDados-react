import React from "react"

export default function Botao(props){
    // console.log(props.tenzie)
    return(
        <footer>
            <button className="botao1" onClick={()=>props.funcao()}>{!props.tenzie ? "Roletar" : "Novo jogo"}</button>
        </footer>
    )
}