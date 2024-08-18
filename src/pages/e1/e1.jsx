import "./e1.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react";
import Cabecalho from "../../components/cabecalho";

export default function Exercicio1() {
    const [valorS1, setValorS1] = useState(0)
    const [valorS2, setValorS2] = useState(0)
    const [resultado,setResultado] = useState(0)

    function calculo() {
        let novo = Number(valorS1) - Number(valorS2)
        setResultado(novo)
    }

    return (
    

    
    <div className="mae">
            <Cabecalho titulo='Exercício 01 - Cupom de desconto' />

        <div className="texto">
        <Link to='/'>
            <img className="seta" src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPWOIo~KzN0dlQAGJGB0mL5JgUAyUR9D6AActKXJLRcFrJSUnyJZbWHrJdi73v-RA4B1tEk~lpDUvsuz1UV9tXfBfc7O~HQhOFL1jiFCCzPy4tZds5VtS~84SWUZkqI6P5HnxiDeHWfFhnpv-97YHVt2FXI-wdE7-d-JTI8Yp6qkPmUgYze3Cn2Z6UlzIjtEGYxzhDyuufjFvW0CgA3OsTX~soLFJDlTEyPReKF8YV2Qq0xdNSIzBpqwVd2jK-B0G4w7x4IsqrZpdXLAld5JO-MPCxp9mhmm05iBU~XjF4r6eyGrZ8Mh-aEOBUwo8-az5qcMRGsB-~PVUO0XME0UTQ__" alt="" />
        </Link>
            <h1 className="hz">Exercício 01 - Cupom de desconto</h1>
        </div>

        <div className="borda2">

        </div>
        <div className="cont">
            <div className="quadrado">
            <p>Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.</p>
        </div>
        </div>
        
        <div className="mae2">
             <div className="rodape">
            <h4 className="ar">Informe o valor do pedido</h4>
            <input className="botaozin" type="Number" value={valorS1} onChange={e => setValorS1(e.target.value)} />

            <h4 className="ar1">Informe o valor do cupom</h4>
            <input className="botaozin2" type="Number" value={valorS2} onChange={e => setValorS2(e.target.value)} />

            <button className="botaozin3" onClick={calculo}>Executar</button>
            
        </div>
        <h3 className="h">Resultado: O total é R${resultado.toFixed(2)}</h3>
        </div>
       
    </div>
       
        
    );
}