import "./e2.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react";
import Cabecalho from  "../../components/cabecalho"

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
             <img className="seta1" src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPWOIo~KzN0dlQAGJGB0mL5JgUAyUR9D6AActKXJLRcFrJSUnyJZbWHrJdi73v-RA4B1tEk~lpDUvsuz1UV9tXfBfc7O~HQhOFL1jiFCCzPy4tZds5VtS~84SWUZkqI6P5HnxiDeHWfFhnpv-97YHVt2FXI-wdE7-d-JTI8Yp6qkPmUgYze3Cn2Z6UlzIjtEGYxzhDyuufjFvW0CgA3OsTX~soLFJDlTEyPReKF8YV2Qq0xdNSIzBpqwVd2jK-B0G4w7x4IsqrZpdXLAld5JO-MPCxp9mhmm05iBU~XjF4r6eyGrZ8Mh-aEOBUwo8-az5qcMRGsB-~PVUO0XME0UTQ__" alt="" />
             </Link>
            <h1 className="hz">Exercício 02 - Converter Kg/gramas</h1>
        </div>

        <div className="borda1">

        </div>

        <div className="cont">
            <div className="quadrado11">
                <p>Implementar um programa em Javascript para converter kilos em gramas.</p>
            </div>
        </div>
        
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