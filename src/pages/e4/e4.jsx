import "./e4.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"
import Quadrado from "../../components/quadrado"

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
            <img className="seta" src="/assets/images/seta.png" alt="" />
        </Link>
            <h1>Exercício 04 - Leitura de livro</h1>
        </div>

        <div className="borda">

        </div>
        
        <Quadrado texto='Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente'
        />
        
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