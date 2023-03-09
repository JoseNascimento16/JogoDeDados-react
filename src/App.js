import './App.css';
import React from 'react';
import Header from "./header"
import Dado from "./dado"
import Botao from "./botao"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = React.useState(genRandomArray())
  // console.log(dice)
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
      const allEqualValues = dice => dice.every(dado => dado.value === dice[0].value)
      const allEqualHeld = dice => dice.every(dado => dado.isHeld === true)
      if (allEqualHeld(dice) && allEqualValues(dice)) {
          setTenzies(true)
          // console.log(tenzies)
      }
      
  }, [dice])

  function genNewDices() {
      // setDice(genRandomArray())
      if(!tenzies){
        setDice(oldDice => oldDice.map(dado => {
          return dado.isHeld ? dado : {
              value: Math.floor(Math.random() * 6 + 1),
              isHeld: false,
              id: nanoid()
              }
        }))
      } else {
        setTenzies(false)
        setDice(genRandomArray())
      }
      
  }

  function genRandomArray() {
      // const array = []
      const array = []
      for (var i = 0; i < 10; i++){
      const randomNumber = Math.floor(Math.random() * 6 + 1)
      // array.push(randomNumber)
      array.push({
          value: randomNumber,
          isHeld: false,
          id: nanoid()
      })
      }
      // console.log(array)
      return array
  }

  function holdDice(id){
      // console.log(id)
      setDice(prevDice => {
          return prevDice.map((dice) => {
              return dice.id === id ? {...dice, isHeld : !dice.isHeld} : dice
          })
      })
  }

  const dadoElemento = dice.map(dado =>
      <Dado 
          key={dado.id}
          value={dado.value}
          isHeld={dado.isHeld}
          id={dado.id}
          mantemDice={holdDice}
      />
  )

  return (
      <main>

        <div className="main-div">

            { tenzies && <Confetti width={1680} numberOfPieces={800}/> }

            <div className="bloco-header">
                <Header tenzie={tenzies}/>
            </div>

            <div className="bloco-dados">
                {dadoElemento}
            </div>

            <div className="bloco-botao">
                <Botao funcao={genNewDices} tenzie={tenzies}/>
            </div>

        </div>

      </main>
  )
}

export default App;
