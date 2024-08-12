import "./index.scss";
import {Link} from 'react-router-dom'
import { useState } from "react";

export default function Exercicio7() {

    const [peso, setPeso] = useState(0)
    const[altura, setAltura] = useState(0)
    const [resultado,setResultado] = useState([])
    const[tipo, setTipo] = useState('')
    const[remover, setRemover] = useState([])

    function excluir() {
        
    }

    function calculo() {
        let imc = peso / (altura * altura)

        setResultado(imc.toFixed(2))
        setTipo(situacao(imc))
    }

    function situacao(imc) {
        if (imc < 18.5) {
            return('Abaixo do peso')
        }
        else if (imc > 18.5 || imc < 24.9 ) {
            return('Peso Normal')
        } else if (imc > 24.9 || imc < 29.9) {
            return('Sobrepeso')
        } else if (imc > 29.9 || imc < 34.9) {
            return('Obesidade Grau I')
        } else if (imc > 34.9 || imc < 39.9) {
            return('Obesidade Grau II')
        } else if (imc > 40) {
            return('Obesidade Grau III')
        }
    } 
    return (

        
    <div className="e7">
             <div className="cabecalho">
            <img className='frei' src="https://s3-alpha-sig.figma.com/img/7bae/1168/0bf1e929fef0bf14e7f0bc09da2392a4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=deRW01aZ8QlX02JdwXqNP9Re9RqiuZr~ijLH8P7wkwsC5pPenu7WuCGPEsmOx~YIMYntU4y6xm0JxADzNboT-9VnXCQNgj8B8aJx1EhPpddRprcTXKrQSE7IUQBu0zJjBswbSZ3i2q69M-~awJlXCpFXeX1Ai-drJbMb~V6w-82VtvvVSC6pigmBqsv17UTALqtxkLkeQExgsXrgr8glccU7QgcebeJcsbdCPnk8pYFcJgjCwimKaah4PMl2S~DYuKuAu0z6CUIndQcl7j0mKLXFiiUB9cGjvLwlfeW6l~AKuofQpQcKKNBqseqWB4QFG88bSPtT6Cwunbc5nq4Mvw__" alt="" />

            <p>React FreiS</p>

            <div className="s">
                <Link className="inicio" to='/'>Inicio</Link>
                <Link className="sobre" to='/Sobre'>Sobre</Link>
            </div>
        </div>

        <div className="texto1">
        <Link to='/'>
             <img className="seta1" src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pehRy0u~nWC2DhVOWbKbs8wEkonNs6tw5cWjrMvimlFpL8QQWyzXBclWd4GNO9QN5KqwAk7Pt8eO-OI-QsmHtygxSCjYz9-9TrQjyqEH6M2edjSdIA59CxaLif5tSHxPJl8C-EZEA6jXjXXsP2UdHvYXZSBRPvV60FSfQJzS04KV6WzqvZhPSeeudCuicZHK39GsafrBSX6dokxihu4lpNGTQVGCOnDnqrbRgTvemP9bFpObwrLzpiDfjSQQZ1DYpXAM2GDjlx9ANiTioPwWtUKI7nFpAknZurLQ6Jsq3ZYAgfTeZE8cWZz2JNbocbg1V4J0Y8l-sMHNjXXpxDPl0w__" alt="" />
             </Link>
            <h1 className="hz">Exercício 07 - IMC</h1>
        </div>

        <div className="borda1">

        </div>

        <div className="quadrado1">
            <p>Implementar um programa em javascript que  a partir da altura e do peso de uma pessoa, calcule o imc e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação.</p>
        </div>

        <div className="q2">
            <h3>Peso</h3>

            <div className="bola1">
            <input className="botao1" type="Number" value={peso} onChange={e => setPeso(Number(e.target.value))} />

                
            </div>
            <h4>Altura</h4>
            <div className="bola2">
            <input className="botao2" type="Number" value={altura} onChange={e => setAltura(e.target.value)} />
            </div>

            <button className="b" onClick={calculo}>Executar</button>
        </div>
            <div className="tex">
                <h3 className="h1">Peso: {peso} | Altura: {altura} | IMC: {resultado}| Situação: {tipo} </h3>  <img className="edit" src="/assets/images/edit.png" alt="" />
            </div>
            
            

    </div>
       
    

    );
}