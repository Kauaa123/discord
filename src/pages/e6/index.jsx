import "./index.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"
import Quadrado from "../../components/quadrado";

export default function Exercicio6() {
    const[salario, setSalario] = useState(0)
    const[bonus, setBonus] = useState(0)
    const[descontos, setDescontos] = useState(0)
    const[resultado, setResultado] = useState(0)

    function calculo() {
        let novo = Number((salario * bonus) / 100) + salario
        let calc = novo - descontos
        setResultado(calc.toFixed(2))

    }

    
    return (

    
    <div className="e6">
        <Cabecalho></Cabecalho>
        
        <div className="texto">
        <Link to='/'>
            <img className="seta" src="/assets/images/seta.png" alt="" />
        </Link>
            <h1>Exercício 06 - Salário líquido</h1>
        </div>

        <div className="borda">

        </div>
        
        
        <Quadrado 
        texto='Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais'
        />
        
        <div className="a">
            <div className="q2">
            <div className="bola1">
                <h3>Salário base</h3>

                <input className="input1" type="Number" value={salario} onChange={e => setSalario(Number(e.target.value))} />
            </div>

            <div className="bola2">
                <h3>Bônus mensal em porcentagem</h3>

                <input className="input2" type="Number" value={bonus} onChange={e => setBonus(Number(e.target.value))}/>
            </div>

            <div className="bola3">
                <h3>Total de descontos</h3>

                <input className="input3" type="Number" value={descontos} onChange={e => setDescontos(Number(e.target.value))} />

                
            </div>
            
                <button className="b" onClick={calculo}>Executar</button>
                
            
        </div>
        </div>
        
            <p className="h1">Seu sálario líquido é de {resultado}</p>
            
    </div>
       
       
        
        
    );
}