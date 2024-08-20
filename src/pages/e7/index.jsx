import "./index.scss";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Cabecalho from "../../components/cabecalho";

export default function Exercicio7() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultados, setResultados] = useState([]);
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
                    };

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
            return 'Peso Normal';
        } else if (imc >= 25 && imc <= 29.9) {
            return 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.9) {
            return 'Obesidade Grau I';
        } else if (imc >= 35 && imc <= 39.9) {
            return 'Obesidade Grau II';
        } else {
            return 'Obesidade Grau III';
        }
    }

    return (
        <div className="e7">
            <Cabecalho />

            <div className="texto1">
                <Link to='/'>
                    <img className="seta1" src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPWOIo~KzN0dlQAGJGB0mL5JgUAyUR9D6AActKXJLRcFrJSUnyJZbWHrJdi73v-RA4B1tEk~lpDUvsuz1UV9tXfBfc7O~HQhOFL1jiFCCzPy4tZds5VtS~84SWUZkqI6P5HnxiDeHWfFhnpv-97YHVt2FXI-wdE7-d-JTI8Yp6qkPmUgYze3Cn2Z6UlzIjtEGYxzhDyuufjFvW0CgA3OsTX~soLFJDlTEyPReKF8YV2Qq0xdNSIzBpqwVd2jK-B0G4w7x4IsqrZpdXLAld5JO-MPCxp9mhmm05iBU~XjF4r6eyGrZ8Mh-aEOBUwo8-az5qcMRGsB-~PVUO0XME0UTQ__" alt="" />
                </Link>
                <h1 className="hz">Exercício 07 - IMC</h1>
            </div>

            <div className="borda1"></div>

            <div className="cont">
                <div className="quadrado1">
                    <p>Implementar um programa em javascript que a partir da altura e do peso de uma pessoa, calcule o imc e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação.</p>
                </div>
            </div>
            
            <div className="marz">
                <div className="q2">
                    <h3>Peso</h3>
                    <div className="bola1">
                        <input 
                            className="botao1" type="number" value={peso} onChange={e => setPeso(Number(e.target.value))} 
                        />
                    </div>
                    <h4>Altura</h4>
                    <div className="bola2">
                        <input 
                            className="botao2" type="number" value={altura} onChange={e => setAltura(Number(e.target.value))} 
                        />
                    </div>
                    <button className="b" onClick={calculo}>Executar</button>
                </div>

                <div className="maez">
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
    );
}
