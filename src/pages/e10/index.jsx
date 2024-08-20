import "./index.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"

export default function Exercicio10() {
    const [gramas, setGramas] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calculo() {
        let preco = gramas >= 1000 ? 3.0 : 3.5
        let novo = (gramas * preco) / 100
        setResultado(novo.toFixed(2))
    }
    return (

    
    <div className="e10">
        <Cabecalho></Cabecalho>
        
        <div className="texto">
        <Link to='/'>
            <img className="seta" src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPWOIo~KzN0dlQAGJGB0mL5JgUAyUR9D6AActKXJLRcFrJSUnyJZbWHrJdi73v-RA4B1tEk~lpDUvsuz1UV9tXfBfc7O~HQhOFL1jiFCCzPy4tZds5VtS~84SWUZkqI6P5HnxiDeHWfFhnpv-97YHVt2FXI-wdE7-d-JTI8Yp6qkPmUgYze3Cn2Z6UlzIjtEGYxzhDyuufjFvW0CgA3OsTX~soLFJDlTEyPReKF8YV2Qq0xdNSIzBpqwVd2jK-B0G4w7x4IsqrZpdXLAld5JO-MPCxp9mhmm05iBU~XjF4r6eyGrZ8Mh-aEOBUwo8-az5qcMRGsB-~PVUO0XME0UTQ__" alt="" />
        </Link>
            <h1>Exercício 10 - Sorveteria</h1>
        </div>

        <div className="borda">

        </div>
        <div className="cont">
           <div className="quadrado1">
                <p>Implementar um programa em javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$ 3,50 mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos.</p>
            </div> 
        </div>
        
        <div className="a">
            <div className="q2">
            <div className="bola1">
                <h3>Total de gramas</h3>

                <input className="input1" type="Number" value={gramas} onChange={e => setGramas( Number(e.target.value))} />
            </div>
        
                <button className="b" onClick={calculo}>Executar</button>
                
            
        </div>
        </div>
        
            <p className="h1">O total a pagar é R$ {resultado}</p>
            
    </div>
       
       
        
        
    );
}