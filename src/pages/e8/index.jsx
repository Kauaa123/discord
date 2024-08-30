import "./index.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"
import Quadrado from '../../components/quadrado'

export default function Exercicio8() {
    const[temperatura, setTemperatura] = useState(0)
    const[situacao, setSituacao] = useState('')

    function classificacao() {
        if (temperatura < 36.0) {
            setSituacao('Hipotermia')
        } else if (temperatura >= 36 && temperatura < 37.6) {
            setSituacao('Normal')
        } else if (temperatura >= 37.6 && temperatura < 39.6) {
            setSituacao('Febre')
        } else if (temperatura >= 39.6 && temperatura < 41) {
            setSituacao('Febre alta')
        } else if (temperatura >= 41) {
            setSituacao('Hipetermia')
        }
    }

    return (

    
    <div className="e8">
        <Cabecalho></Cabecalho>
        
        <div className="texto">
        <Link to='/'>
            <img className="seta" src="/assets/images/seta.png" alt="" />
        </Link>
            <h1>Exercício 08 - Temperatura</h1>
        </div>

        <div className="borda">

        </div>
        
        
        <Quadrado 
        texto='Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação.'
        />
        
        <div className="mae">
            <div className="quadrado2">

                <div className="informacoes">
                    <h3>Temperatura</h3>

                    <input className="input1" type="Number" value={temperatura} onChange={e => setTemperatura(Number(e.target.value))} />
                </div>
        
                <button id="botaoAzul" onClick={classificacao}>Executar</button>
                
            
            </div>
            <p id="textoResposta">A situação para sua temperatura é {situacao}</p>
        </div>
        
            
            
    </div>
       
       
        
        
    );
}