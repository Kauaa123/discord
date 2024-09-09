import "./index.scss";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Cabecalho from "../../components/cabecalho";
import Quadrado from '../../components/quadrado'

export default function Exercicio10() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultados, setResultados] = useState([])
    const[editando, setEditando] = useState(-1)

    function editar(index) {
        setPeso(resultados[index].peso)
        setAltura(resultados[index].altura)
        setEditando(index)
    }   
    
    function remover(index) {
        resultados.splice(index, 1)
        setResultados([...resultados])
    }

    function calculo() {
        let alturaEmMetros = altura / 100;

        if (peso > 0 && alturaEmMetros > 0) {

            if (peso > 0 && alturaEmMetros > 0) {
                let imc = peso / (alturaEmMetros * alturaEmMetros)

                let objeto = {
                    peso: peso,
                    altura: altura,
                    imc: imc.toFixed(2),
                    tipo: situacao(imc)
                    }

                setResultados([...resultados, objeto])
                setAltura(0)
                setPeso(0)

                if (editando === -1) {
                setResultados([...resultados, objeto])
                } 
                else {

                let novosResultados = resultados.slice()
                novosResultados[editando] = objeto
                setResultados(novosResultados)
                setEditando(-1)
                }
            }
            
            
        } else {
            alert('Por favor, insira valores válidos para peso e altura.');
        }
    }

    function situacao(imc) {
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            return 'Peso Normal'
        } else if (imc >= 25 && imc <= 29.9) {
            return 'Sobrepeso'
        } else if (imc >= 30 && imc <= 34.9) {
            return 'Obesidade Grau I'
        } else if (imc >= 35 && imc <= 39.9) {
            return 'Obesidade Grau II'
        } else {
            return 'Obesidade Grau III'
        }
    }

    return (
        <div className="e10">
            <Cabecalho />

            <div className="texto">
                <Link to='/'>
                    <img className="seta" src="/assets/images/seta.png" alt="" />
                </Link>
                <h1>Exercício 10 - Calculo de IMC com histórico</h1>
            </div>

            <div className="borda"></div>

            <Quadrado 
            texto='Implementar um programa em javascript que a partir da altura e do peso de uma pessoa, calcule o imc e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação.'
            />
            
            <div className="container">
                <div className="sub">
                    
                    <div className="esquerda">
                        <h3>Peso</h3>
                        <input className="botao1" type="Number" value={peso} onChange={e => setPeso(Number(e.target.value))}/>
                    </div>

                    <div className="direita">
                        <h4>Altura</h4>
                        <input className="botao2" type="Number" value={altura} onChange={e => setAltura(Number(e.target.value))}/>
                    </div>
                    <button id="botaoAzul" onClick={calculo}>Executar</button>
                </div>

                <div className="principal">
                        {resultados.map((objeto, index) => (
                            <div key={index} className="resultados">
                                <h3>
                                    Peso: {objeto.peso} kg | Altura: {objeto.altura} cm | IMC: {objeto.imc} | Situação: {objeto.tipo}
                                </h3>
                                
                                    <div className="imgs">
                                         <img id="ola" src="https://images.vexels.com/content/223479/preview/trash-bin-icon-flat-dd5fc7.png" alt=""  onClick={() => remover(index)}/>

                                        <img  id="ola2" src="/assets/images/edit.png" alt="" onClick={() => editar(index)} />
                                    </div>    
                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    )
}
