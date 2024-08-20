import "./index.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"

export default function Exercicio8() {
    const[cor1, setCor1] = useState('')
    const[cor2, setCor2] = useState('')
    const[verificar, setVerificar] = useState('')

    function cores() {
        const coresPrimarias = ['amarelo', 'azul', 'vermelho'];
    
        const cor1Primaria = cor1 === 'amarelo' || cor1 === 'azul' || cor1 === 'vermelho';
        
        const cor2Primaria = cor2 === 'amarelo' || cor2 === 'azul' || cor2 === 'vermelho';
        
        if (cor1Primaria && cor2Primaria) {
            setVerificar('True');
        } else {
            setVerificar('False');
        }
    }
    return (

    
    <div className="e8">
        <Cabecalho></Cabecalho>
        
        <div className="texto">
        <Link to='/'>
            <img className="seta" src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPWOIo~KzN0dlQAGJGB0mL5JgUAyUR9D6AActKXJLRcFrJSUnyJZbWHrJdi73v-RA4B1tEk~lpDUvsuz1UV9tXfBfc7O~HQhOFL1jiFCCzPy4tZds5VtS~84SWUZkqI6P5HnxiDeHWfFhnpv-97YHVt2FXI-wdE7-d-JTI8Yp6qkPmUgYze3Cn2Z6UlzIjtEGYxzhDyuufjFvW0CgA3OsTX~soLFJDlTEyPReKF8YV2Qq0xdNSIzBpqwVd2jK-B0G4w7x4IsqrZpdXLAld5JO-MPCxp9mhmm05iBU~XjF4r6eyGrZ8Mh-aEOBUwo8-az5qcMRGsB-~PVUO0XME0UTQ__" alt="" />
        </Link>
            <h1>Exercício 08 - Cores primárias</h1>
        </div>

        <div className="borda">

        </div>
        <div className="cont">
           <div className="quadrado1">
                <p>Implementar um programa em javascript para verificar se duas cores são primárias</p>
            </div> 
        </div>
        
        <div className="a">
            <div className="q2">
            <div className="bola1">
                <h3>Cor 01</h3>

                <input className="input1" type="text" value={cor1} onChange={e => setCor1(e.target.value)} />
            </div>

            <div className="bola2">
                <h3>Cor 02</h3>

                <input className="input2" type="text" value={cor2} onChange={e => setCor2(e.target.value)}/>
            </div>

        
                <button className="b" onClick={cores}>Executar</button>
                
            
        </div>
        </div>
        
            <p className="h1">As cores são primárias? {verificar}</p>
            
    </div>
       
       
        
        
    );
}