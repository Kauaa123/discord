import "./index.scss"; 
import { Link } from 'react-router-dom';
import { useState } from "react";
import Cabecalho from  "../../components/cabecalho";
import Quadrado from '../../components/quadrado';

export default function Exercicio12() {
   const [sexo, setSexo] = useState('');
   const [nome, setNome] = useState('');
   const [idade, setIdade] = useState(0);
   const [pessoas, setPessoas] = useState([]);
   const [mostrarPessoas, setMostrarPessoas] = useState(false);
   const [indexEditando, setIndexEditando] = useState(null);


   const adicionarPessoa = () => {
       setPessoas([...pessoas, { nome, idade, sexo }]);
       setMostrarPessoas(true);
       setNome('');
       setIdade(0);
       setSexo('');
   };

   const editarPessoa = (index) => {
    setNome(pessoas[index].nome);
    setIdade(pessoas[index].idade);
    setSexo(pessoas[index].sexo);
    setIndexEditando(index);
    };

   const apagarPessoa = (index) => {
       setPessoas(pessoas.filter((_, i) => i !== index));
   };

   return (
    <div className="e12">
        <Cabecalho />

        <div className="texto">
            <Link to='/'>
                <img className="seta" src="/assets/images/seta.png" alt="" />
            </Link>
            <h1>Exercício 12 - Comparador de pessoas</h1>
        </div>

        <div className="borda"></div>
        
        <Quadrado 
            texto='Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas.' 
        />
        
        <div className="principal">
            <div className="info">
                <div className="infos1">
                    <h1>Nome</h1>
                    <input type="text" id="inputNome" value={nome} onChange={(e) => setNome(e.target.value)} 
                    />
                </div>
                
                <div className="infos2">
                    <h1>Idade</h1>
                    <input type="Number" id="inputIdade" value={idade} onChange={(e) => setIdade(Number(e.target.value))} 
                    />
                </div>
                <h1>Sexo</h1>
                <div className="mae">
                    <div className="infos3">
                        <input type="radio" className="SexoM" value='Masculino' checked={sexo === 'Masculino'} onChange={(e) => setSexo(e.target.value)} 
                        /> 
                        <p>Masculino</p>
                    </div>

                    <div className="infos4">
                        <input type="radio" className="SexoF" value='Feminino' checked={sexo === 'Feminino'} onChange={(e) => setSexo(e.target.value)} 
                        /> 
                        <p>Feminino</p>
                    </div>
                    <div className="botaoAzul">
                        <button onClick={adicionarPessoa}>Executar</button>
                    </div>
                </div>
            </div>

            {mostrarPessoas && (
                <div className="direita">
                    <div className="bordaText">
                        <h1>Pessoas</h1>
                        <hr />
                    </div>
                    
                    
                        {pessoas.map((pessoa, index) => (
                          <div className="cardPessoas">  
                            <div key={index} className="infoPessoas">
                                <h1>{pessoa.nome}</h1>
                                <h2>{pessoa.idade}</h2>
                                <h2>{pessoa.sexo}</h2>

                                <div className="opcoes">
                                    <h3 onClick={() => editarPessoa(index)} id="Editar">Editar</h3>
                                    <hr />
                                    <h3 onClick={() => apagarPessoa(index)} id="Apagar">Apagar</h3>
                                </div>
                            </div>
                          </div>  
                        ))}

            
                        
                        
                    </div>
                
            )}
        </div>
    </div>
   );
}
