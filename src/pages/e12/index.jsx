import "./index.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"
import Cabecalho from  "../../components/cabecalho"
import Quadrado from '../../components/quadrado'

export default function Exercicio12() {
   const [sexo, setSexo] = useState('')
   const [nome, setNome] = useState('')
   const [idade, setIdade] = useState(0)
    
    return (

    
    <div className="e12">
        <Cabecalho></Cabecalho>
        
        <div className="texto">
        <Link to='/'>
            <img className="seta" src="/assets/images/seta.png" alt="" />
        </Link>
            <h1>Exercício 12 - Comparador de pessoas</h1>
        </div>

        <div className="borda">

        </div>
        
        <Quadrado texto='Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas.'
        />
        
        <div className="principal">
             <div className="info">
            <div className="infos1">
                <h1>Nome</h1>
                <input type="text" id="inputNome" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            
            <div className="infos2">
                <h1>Idade</h1>
                <input type="text" id="inputIdade" value={idade} onChange={(e) => setIdade(Number(e.target.value))} />
            </div>
            <h1>Sexo</h1>
            <div className="mae">
                
                <div className="infos3">
                    
                    <input type="checkbox" className="SexoM" value='Masculino' checked={sexo === 'Masculino'} onChange={(e) => setSexo(e.target.value)}/> <p>Masculino</p>
                </div>

                <div className="infos4">
                    <input type="checkbox" className="SexoF" value='Feminino' checked={sexo === 'Feminino'} onChange={(e) => setSexo(e.target.value)} /> <p>Feminino</p>
                </div>
            <div className="botaoAzul">
                <button>Executar</button>
            </div>
                
            </div>
            
        </div>

        <div className="direita">
            <div className="bordaText">
                <h1>Pessoas</h1>
                <hr />
            </div>
        </div>
        
        </div>
       
            
    </div>
       
       
        
        
    );
}