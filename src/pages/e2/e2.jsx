import "./e2.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react";
import Cabecalho from  "../../components/cabecalho"
import Quadrado from "../../components/quadrado"

export default function Exercicio2() {
    const [valorS1, setValorS1] = useState(0)
    const [resultado,setResultado] = useState(0)

    function calculo() {
        let novo = Number(valorS1) * 1000
        setResultado(novo)
    }
    return (

        
    <div className="principal1">
        <Cabecalho titulo='Exercício 02 - Converter Kg/gramas' />

        <div className="texto1">
        <Link to='/'>
             <img className="seta1" src="/assets/images/seta.png" alt="" />
             </Link>
            <h1 className="hz">Exercício 02 - Converter Kg/gramas</h1>
        </div>

        <div className="borda1">

        </div>

        <Quadrado 
            texto='Implementar um programa em Javascript para converter kilos em gramas' 
        />
        
        <div className="mae2">
            <div className="botao11">
            <h6>Valor em gramas</h6>
            
            <input className="botao1" type="Number" value={valorS1} onChange={e => setValorS1(e.target.value)} />
            
            <button className="botao2" onClick={calculo}>Executar</button>
            
        </div>
        <h3 className="h1">Resultado: O total é R${resultado.toFixed(2)}</h3>
        </div>
        
    </div>
       
        
        
    );
}