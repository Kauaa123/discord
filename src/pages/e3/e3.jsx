import "./e3.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"

export default function Exercicio3() {
    const [valorS1, setValorS1] = useState(0)
    const [valorS2, setValorS2] = useState(0)
    const [valorS3, setValorS3] = useState(0)
    const [resultado,setResultado] = useState(0)

    function calculo() {
        let novo = (valorS1 * 13.5) + (valorS2 * 15.0) + (valorS3 * 17.5)
        setResultado(novo)
    }

    return (

    
    <div className="e3">
        <Cabecalho />

        <div className="texto">
        <Link to='/'>
            <img className="seta" src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPWOIo~KzN0dlQAGJGB0mL5JgUAyUR9D6AActKXJLRcFrJSUnyJZbWHrJdi73v-RA4B1tEk~lpDUvsuz1UV9tXfBfc7O~HQhOFL1jiFCCzPy4tZds5VtS~84SWUZkqI6P5HnxiDeHWfFhnpv-97YHVt2FXI-wdE7-d-JTI8Yp6qkPmUgYze3Cn2Z6UlzIjtEGYxzhDyuufjFvW0CgA3OsTX~soLFJDlTEyPReKF8YV2Qq0xdNSIzBpqwVd2jK-B0G4w7x4IsqrZpdXLAld5JO-MPCxp9mhmm05iBU~XjF4r6eyGrZ8Mh-aEOBUwo8-az5qcMRGsB-~PVUO0XME0UTQ__" alt="" />
        </Link>
            <h1>Exercício 03 - Valor total por quantidade</h1>
        </div>

        <div className="borda2">

        </div>
        <div className="cont">
            <div className="quadrado1">
                <p>Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande,<br /> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
            </div>
        </div>
        
        <div className="a">
            <div className="q2">
            <div className="bola1">
                <h3>Quantidade pequeno</h3>

                <input className="input1" type="Number" value={valorS1} onChange={e => setValorS1(e.target.value)} />
            </div>

            <div className="bola2">
                <h3>Quantidade medio</h3>

                <input className="input2" type="Number" value={valorS2} onChange={e => setValorS2(e.target.value)}/>
            </div>

            <div className="bola3">
                <h3>Quantidade grande</h3>

                <input className="input3" type="Number" value={valorS3} onChange={e => setValorS3(e.target.value)}/>

                
            </div>
            
                <button className="b" onClick={calculo}>Executar</button>
                
            
        </div>
        </div>
        
            <p className="h1">Resultado: O total é R${resultado.toFixed(2)}</p>
    </div>
       
        
        
    );
}