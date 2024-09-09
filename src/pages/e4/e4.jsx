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
        if (nome != '' && totalPaginas > 0 && tempoSegundos > 0) {
            let novo = (totalPaginas * tempoSegundos) / 3600
            setresultado(novo)
        }
        
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
        
        <div className="mae">
            <div className="quadrado2">
            <div className="primeiro">
                <h3>Nome do livro</h3>

                <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
            </div>

            <div className="segundo">
                <h3>Total de páginas</h3>

                <input type="Number" value={totalPaginas} onChange={e => setTotalPaginas(Number(e.target.value))}/>
            </div>

            <div className="terceiro">
                <h3>Tempo em segundos</h3>

                <input type="Number" value={tempoSegundos} onChange={e => setTempoSegundos(Number(e.target.value))} />

                
            </div>
            
                <button id="botaoAzul" onClick={calculo}>Executar</button>
                
            
        </div>
<<<<<<< HEAD
        
=======
        <div className="resultado-container">
            <p id="textoResposta">Você lerá {nome} em {resultado.toFixed(2)} horas</p>
>>>>>>> b4e462a728a7c167179f650c50323c6c103426db
        </div>
            
        </div>
        
            <p id="textoResposta">Você lerá {nome} em {resultado.toFixed(2)} horas</p>
    </div>
       
       
        
        
    );
}