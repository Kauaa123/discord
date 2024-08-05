import "./e1.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react";

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
             <div className="cabecalho">
            <img className='frei' src="https://s3-alpha-sig.figma.com/img/7bae/1168/0bf1e929fef0bf14e7f0bc09da2392a4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=deRW01aZ8QlX02JdwXqNP9Re9RqiuZr~ijLH8P7wkwsC5pPenu7WuCGPEsmOx~YIMYntU4y6xm0JxADzNboT-9VnXCQNgj8B8aJx1EhPpddRprcTXKrQSE7IUQBu0zJjBswbSZ3i2q69M-~awJlXCpFXeX1Ai-drJbMb~V6w-82VtvvVSC6pigmBqsv17UTALqtxkLkeQExgsXrgr8glccU7QgcebeJcsbdCPnk8pYFcJgjCwimKaah4PMl2S~DYuKuAu0z6CUIndQcl7j0mKLXFiiUB9cGjvLwlfeW6l~AKuofQpQcKKNBqseqWB4QFG88bSPtT6Cwunbc5nq4Mvw__" alt="" />

            <p>React FreiS</p>

            <div className="s">
                <Link className="inicio" to='/'>Inicio</Link>
                <Link className="sobre" to='/Sobre'>Sobre</Link>
            </div>
        </div>

        <div className="texto">
        <Link to='/'>
            <img className="seta" src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pehRy0u~nWC2DhVOWbKbs8wEkonNs6tw5cWjrMvimlFpL8QQWyzXBclWd4GNO9QN5KqwAk7Pt8eO-OI-QsmHtygxSCjYz9-9TrQjyqEH6M2edjSdIA59CxaLif5tSHxPJl8C-EZEA6jXjXXsP2UdHvYXZSBRPvV60FSfQJzS04KV6WzqvZhPSeeudCuicZHK39GsafrBSX6dokxihu4lpNGTQVGCOnDnqrbRgTvemP9bFpObwrLzpiDfjSQQZ1DYpXAM2GDjlx9ANiTioPwWtUKI7nFpAknZurLQ6Jsq3ZYAgfTeZE8cWZz2JNbocbg1V4J0Y8l-sMHNjXXpxDPl0w__" alt="" />
        </Link>
            <h1 className="hz">Exercício 01 - Cupom de desconto</h1>
        </div>

        <div className="borda2">

        </div>

        <div className="quadrado">
            <p>Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.</p>
        </div>

        <div className="rodape">
            <h4 className="ar">Informe o valor do pedido</h4>
            <input className="botaozin" type="Number" value={valorS1} onChange={e => setValorS1(e.target.value)} />

            <h4 className="ar1">Informe o valor do cupom</h4>
            <input className="botaozin2" type="Number" value={valorS2} onChange={e => setValorS2(e.target.value)} />

            <button className="botaozin3" onClick={calculo}>Executar</button>
        </div>
        <h3 className="h">Resultado: O total é R${resultado.toFixed(2)}</h3>
    </div>
       
        
    );
}