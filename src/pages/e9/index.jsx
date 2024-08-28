import "./index.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"
import Quadrado from '../../components/quadrado'

export default function Exercicio9() {
    const [gramas, setGramas] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calculo() {
        let preco = gramas >= 1000 ? 3.0 : 3.5
        let novo = (gramas * preco) / 100
        setResultado(novo.toFixed(2))
    }
    return (

    
    <div className="e9">
        <Cabecalho></Cabecalho>
        
        <div className="texto">
        <Link to='/'>
            <img className="seta" src="/assets/images/seta.png" alt="" />
        </Link>
            <h1>Exercício 09 - Sorveteria</h1>
        </div>

        <div className="borda">

        </div>
        
        
        <Quadrado 
        texto='Implementar um programa em javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$ 3,50 mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos.'
        />
        
        <div className="mae">
            <div className="quadrado2">
                <h3>Total de gramas</h3>

                <input className="input1" type="Number" value={gramas} onChange={e => setGramas( Number(e.target.value))} />
            </div>
        
                <button id="botaoAzul" onClick={calculo}>Executar</button>
        </div>
        
            <p id="textoResultado">O total a pagar é R$ {resultado}</p>
            
    </div>
       
       
        
        
    );
}