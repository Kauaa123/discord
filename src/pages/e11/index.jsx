import "./index.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"
import Quadrado from '../../components/quadrado'

export default function Exercicio11() {
    const [num, setNum] = useState(0)
    const [resultado, setResultado] = useState([])

    function calculo() {
        if (num > 0) {
            let calc = []
            for(let i = 0; i <= 10; i++){
                calc.push(`${num} x ${i} = ${num * i}`)
            }
            setResultado(calc)
        }
        
    }
    


    return (

    
    <div className="e11">
        <Cabecalho></Cabecalho>
        
        <div className="texto">
        <Link to='/'>
            <img className="seta" src="/assets/images/seta.png" alt="" />
        </Link>
            <h1>Exercício 11 - Tabuada</h1>
        </div>

        <div className="borda">

        </div>
        
        <Quadrado 
        texto='Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.'
        />
        
        <div className="mae">
            <div className="quadrado2">
            <div className="bola1">
                <h3>Tabuada do:</h3>

                <input className="input1" type="Number" value={num} onChange={e => setNum( Number(e.target.value))} />
            </div>
        
                <button id="botaoAzul" onClick={calculo}>Executar</button>
                
            
        </div>
        </div>
        
            <div>
                {resultado.map((item, index) => 
                    <p key={index} id="textoResposta"> {item} </p>
                )}
            </div>
            
    </div>
       
       
        
        
    );
}