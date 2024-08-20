import "./index.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"

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
            <img className="seta" src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPWOIo~KzN0dlQAGJGB0mL5JgUAyUR9D6AActKXJLRcFrJSUnyJZbWHrJdi73v-RA4B1tEk~lpDUvsuz1UV9tXfBfc7O~HQhOFL1jiFCCzPy4tZds5VtS~84SWUZkqI6P5HnxiDeHWfFhnpv-97YHVt2FXI-wdE7-d-JTI8Yp6qkPmUgYze3Cn2Z6UlzIjtEGYxzhDyuufjFvW0CgA3OsTX~soLFJDlTEyPReKF8YV2Qq0xdNSIzBpqwVd2jK-B0G4w7x4IsqrZpdXLAld5JO-MPCxp9mhmm05iBU~XjF4r6eyGrZ8Mh-aEOBUwo8-az5qcMRGsB-~PVUO0XME0UTQ__" alt="" />
        </Link>
            <h1>Exercício 05 - Salário líquido</h1>
        </div>

        <div className="borda">

        </div>
        <div className="cont">
           <div className="quadrado1">
                <p>Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais</p>
            </div> 
        </div>
        
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