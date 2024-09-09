import "./index.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"
import Quadrado from '../../components/quadrado'

export default function Exercicio7() {
    const[cor1, setCor1] = useState('')
    const[cor2, setCor2] = useState('')
    const[verificar, setVerificar] = useState('')

    function cores() {   
        const cor1Primaria = cor1 === 'amarelo' || cor1 === 'azul' || cor1 === 'vermelho';
        
        const cor2Primaria = cor2 === 'amarelo' || cor2 === 'azul' || cor2 === 'vermelho';
        
        if (cor1Primaria && cor2Primaria) {
            setVerificar('True');
        } else {
            setVerificar('False');
        }
    }
    return (

    
    <div className="e7">
        <Cabecalho></Cabecalho>
        
        <div className="texto">
        <Link to='/'>
            <img className="seta" src="/assets/images/seta.png" alt="" />
        </Link>
            <h1>Exercício 07 - Cores primárias</h1>
        </div>

        <div className="borda">

        </div>
        
        
        <Quadrado 
        texto='Implementar um programa em javascript para verificar se duas cores são primárias'
        />
        
        <div className="mae">
            <div className="quadrado2">
            <div className="primeiro">
                <h3>Cor 01</h3>

                <input className="input1" type="text" value={cor1} onChange={e => setCor1(e.target.value)} />
            </div>

            <div className="segundo">
                <h3>Cor 02</h3>

                <input className="input2" type="text" value={cor2} onChange={e => setCor2(e.target.value)}/>
            </div>

        
                <button id="botaoAzul" onClick={cores}>Executar</button>
                
            
        </div>
        <div className="resultado-container">
            <p id="textoResposta">As cores são primárias? {verificar}</p>
        </div>
            
        </div>
        
            
    </div>
       
       
        
        
    );
}