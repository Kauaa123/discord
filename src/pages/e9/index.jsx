import "./index.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"

export default function Exercicio9() {
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
            <img className="seta" src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPWOIo~KzN0dlQAGJGB0mL5JgUAyUR9D6AActKXJLRcFrJSUnyJZbWHrJdi73v-RA4B1tEk~lpDUvsuz1UV9tXfBfc7O~HQhOFL1jiFCCzPy4tZds5VtS~84SWUZkqI6P5HnxiDeHWfFhnpv-97YHVt2FXI-wdE7-d-JTI8Yp6qkPmUgYze3Cn2Z6UlzIjtEGYxzhDyuufjFvW0CgA3OsTX~soLFJDlTEyPReKF8YV2Qq0xdNSIzBpqwVd2jK-B0G4w7x4IsqrZpdXLAld5JO-MPCxp9mhmm05iBU~XjF4r6eyGrZ8Mh-aEOBUwo8-az5qcMRGsB-~PVUO0XME0UTQ__" alt="" />
        </Link>
            <h1>Exercício 09 - Temperatura</h1>
        </div>

        <div className="borda">

        </div>
        <div className="cont">
           <div className="quadrado1">
                <p>Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação</p>
            </div> 
        </div>
        
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