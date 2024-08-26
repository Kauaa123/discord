import "./e4.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"

export default function Exercicio4() {
    const[nome,setNome] = useState('')
    const[totalPaginas, setTotalPaginas] = useState(0)
    const[tempoSegundos, setTempoSegundos] = useState(0)
    const[resultado, setresultado] = useState(0)

    function calculo() {
        let novo = (totalPaginas * tempoSegundos) / 3600
        setresultado(novo)
    }

    
    return (

    
    <div className="e4">
        <Cabecalho></Cabecalho>
        
        <div className="texto">
        <Link to='/'>
            <img className="seta" src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPWOIo~KzN0dlQAGJGB0mL5JgUAyUR9D6AActKXJLRcFrJSUnyJZbWHrJdi73v-RA4B1tEk~lpDUvsuz1UV9tXfBfc7O~HQhOFL1jiFCCzPy4tZds5VtS~84SWUZkqI6P5HnxiDeHWfFhnpv-97YHVt2FXI-wdE7-d-JTI8Yp6qkPmUgYze3Cn2Z6UlzIjtEGYxzhDyuufjFvW0CgA3OsTX~soLFJDlTEyPReKF8YV2Qq0xdNSIzBpqwVd2jK-B0G4w7x4IsqrZpdXLAld5JO-MPCxp9mhmm05iBU~XjF4r6eyGrZ8Mh-aEOBUwo8-az5qcMRGsB-~PVUO0XME0UTQ__" alt="" />
        </Link>
            <h1>Exercício 04 - Leitura de livro</h1>
        </div>

        <div className="borda">

        </div>
        <div className="cont">
           <div className="quadrado1">
                <p>Implementar um programa de JavaScript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de paginas e do tempo me segundos de leitura por pagina.</p>
            </div> 
        </div>
        
        <div className="a">
            <div className="q2">
            <div className="bola1">
                <h3>Nome do livro</h3>

                <input className="input1" type="text" value={nome} onChange={e => setNome(e.target.value)} />
            </div>

            <div className="bola2">
                <h3>Total de páginas</h3>

                <input className="input2" type="Number" value={totalPaginas} onChange={e => setTotalPaginas(e.target.value)}/>
            </div>

            <div className="bola3">
                <h3>Tempo em segundos</h3>

                <input className="input3" type="Number" value={tempoSegundos} onChange={e => setTempoSegundos(e.target.value)} />

                
            </div>
            
                <button className="b" onClick={calculo}>Executar</button>
                
            
        </div>
        </div>
        
            <p className="h1">Você lerá {nome} em {resultado.toFixed(2)} horas</p>
    </div>
       
       
        
        
    );
}