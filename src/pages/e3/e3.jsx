import "./e3.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"

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
            <h1>Exercício 03 - Valor total por quantidade</h1>
        </div>

        <div className="borda2">

        </div>

        <div className="quadrado1">
            <p>Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande,<br /> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
        </div>

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
            <p className="h1">Resultado: O total é R${resultado.toFixed(2)}</p>
    </div>
       
        
        
    );
}