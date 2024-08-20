import "./index.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"

export default function Exercicio11() {
    const [num, setNum] = useState(0)
    const [resultado, setResultado] = useState([])

    function calculo() {
        let calc = []
        for(let i = 0; i <= 10; i++){
            calc.push(`${num} x ${i} = ${num * i}`)
        }
        setResultado(calc)
    }
    


    return (

    
    <div className="e11">
        <Cabecalho></Cabecalho>
        
        <div className="texto">
        <Link to='/'>
            <img className="seta" src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPWOIo~KzN0dlQAGJGB0mL5JgUAyUR9D6AActKXJLRcFrJSUnyJZbWHrJdi73v-RA4B1tEk~lpDUvsuz1UV9tXfBfc7O~HQhOFL1jiFCCzPy4tZds5VtS~84SWUZkqI6P5HnxiDeHWfFhnpv-97YHVt2FXI-wdE7-d-JTI8Yp6qkPmUgYze3Cn2Z6UlzIjtEGYxzhDyuufjFvW0CgA3OsTX~soLFJDlTEyPReKF8YV2Qq0xdNSIzBpqwVd2jK-B0G4w7x4IsqrZpdXLAld5JO-MPCxp9mhmm05iBU~XjF4r6eyGrZ8Mh-aEOBUwo8-az5qcMRGsB-~PVUO0XME0UTQ__" alt="" />
        </Link>
            <h1>Exercício 11 - Tabuada</h1>
        </div>

        <div className="borda">

        </div>
        <div className="cont">
           <div className="quadrado1">
                <p>Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.</p>
            </div> 
        </div>
        
        <div className="a">
            <div className="q2">
            <div className="bola1">
                <h3>Tabuada do:</h3>

                <input className="input1" type="Number" value={num} onChange={e => setNum( Number(e.target.value))} />
            </div>
        
                <button className="b" onClick={calculo}>Executar</button>
                
            
        </div>
        </div>
        
            <div>
                {resultado.map((item, index) => 
                    <p key={index} className="h1"> {item} </p>
                )}
            </div>
            
    </div>
       
       
        
        
    );
}