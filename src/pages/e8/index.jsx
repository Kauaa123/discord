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

    
    <div className="e9">
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
        
        <div className="a">
            <div className="q2">
            <div className="bola1">
                <h3>Temperatura</h3>

                <input className="input1" type="text" value={temperatura} onChange={e => setTemperatura(e.target.value)} />
            </div>
        
                <button className="b" onClick={classificacao}>Executar</button>
                
            
        </div>
        </div>
        
            <p className="h1">A situação para sua temperatura é {situacao}</p>
            
    </div>
       
       
        
        
    );
}