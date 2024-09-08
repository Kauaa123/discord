import "./e3.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"
import Quadrado from "../../components/quadrado"

export default function Exercicio3() {
    const [valorS1, setValorS1] = useState(0)
    const [valorS2, setValorS2] = useState(0)
    const [valorS3, setValorS3] = useState(0)
    const [resultado,setResultado] = useState(0)

    function calculo() {
        if (valorS1 > 0 || valorS2 > 0 || valorS3 > 0) {
           let novo = (valorS1 * 13.5) + (valorS2 * 15.0) + (valorS3 * 17.5)
            setResultado(novo) 
        }
        
    }

    return (

    
    <div className="e3">
        <Cabecalho />

        <div className="texto">
        <Link to='/'>
            <img className="seta" src="/assets/images/seta.png" alt="" />
        </Link>
            <h1>Exercício 03 - Valor total por quantidade</h1>
        </div>

        <div className="borda">

        </div>
        
        <Quadrado 
        texto='Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página'/>
        
        <div className="mae">
            <div className="quadrado2">
            <div className="primeiro">
                <h3>Quantidade pequeno</h3>

                <input type="Number" value={valorS1} onChange={e => setValorS1(Number(e.target.value))} />
            </div>

            <div className="segundo">
                <h3>Quantidade medio</h3>

                <input type="Number" value={valorS2} onChange={e => setValorS2(Number(e.target.value))}/>
            </div>

            <div className="terceiro">
                <h3>Quantidade grande</h3>

                <input type="Number" value={valorS3} onChange={e => setValorS3(Number(e.target.value))}/>

                
            </div>
            
                <button id="botaoAzul" onClick={calculo}>Executar</button>
                
            
        </div>
        <div className="resultado-container">
            <p id="textoResposta">Resultado: O total é R${resultado.toFixed(2)}</p>
        </div>
            
        </div>
        
            
    </div>
       
        
        
    );
}