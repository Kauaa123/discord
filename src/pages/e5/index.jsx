import "./index.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"

export default function Exercicio5() {
    const[nota1,setNota1] = useState(0)
    const[nota2, setNota2] = useState(0)
    const[nota3, setNota3] = useState(0)
    const[resultado, setResultado] = useState(0)
    const[passou, setPassou] = useState('')

    function calculo() {
        let novo = Number((nota1 + nota2 + nota3) / 3)
        setResultado(novo.toFixed(2))
        situacao(novo)
    }

    function situacao(novo) {
        if (novo >= 6) {
            setPassou ('True')
        } else {
            setPassou('False')
        }
    }
    
    return (

    
    <div className="e5">
        <Cabecalho></Cabecalho>
        
        <div className="texto">
        <Link to='/'>
            <img className="seta" src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPWOIo~KzN0dlQAGJGB0mL5JgUAyUR9D6AActKXJLRcFrJSUnyJZbWHrJdi73v-RA4B1tEk~lpDUvsuz1UV9tXfBfc7O~HQhOFL1jiFCCzPy4tZds5VtS~84SWUZkqI6P5HnxiDeHWfFhnpv-97YHVt2FXI-wdE7-d-JTI8Yp6qkPmUgYze3Cn2Z6UlzIjtEGYxzhDyuufjFvW0CgA3OsTX~soLFJDlTEyPReKF8YV2Qq0xdNSIzBpqwVd2jK-B0G4w7x4IsqrZpdXLAld5JO-MPCxp9mhmm05iBU~XjF4r6eyGrZ8Mh-aEOBUwo8-az5qcMRGsB-~PVUO0XME0UTQ__" alt="" />
        </Link>
            <h1>Exercício 05 - Média de notas</h1>
        </div>

        <div className="borda">

        </div>
        <div className="cont">
           <div className="quadrado1">
                <p>Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</p>
            </div> 
        </div>
        
        <div className="a">
            <div className="q2">
            <div className="bola1">
                <h3>Nota 01</h3>

                <input className="input1" type="Number" value={nota1} onChange={e => setNota1(Number(e.target.value))} />
            </div>

            <div className="bola2">
                <h3>Nota 02</h3>

                <input className="input2" type="Number" value={nota2} onChange={e => setNota2(Number(e.target.value))}/>
            </div>

            <div className="bola3">
                <h3>Nota 03</h3>

                <input className="input3" type="Number" value={nota3} onChange={e => setNota3(Number(e.target.value))} />

                
            </div>
            
                <button className="b" onClick={calculo}>Executar</button>
                
            
        </div>
        </div>
        
            <p className="h1">A média é {resultado}. O aluno passou? {passou}</p>
            
    </div>
       
       
        
        
    );
}