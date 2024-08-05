import "./e5.scss"; 
import {Link} from 'react-router-dom'
import { useState } from "react"

export default function Exercicio5() {
    const[valorS1, setValorS1] = useState(0)
    const[valorS2, setValorS2] = useState(0)
    const[valorS3, setValorS3] = useState(0)
    const[resultado, setresultado] = useState(0)
    const[passou, setPassou] = useState('')

    function calculo() {
        if (valorS1 >= 0 && valorS1 <= 10 && valorS2 >= 0 && valorS2 <= 10 && valorS3 >= 0 && valorS3 <= 10) {
          let media = (Number(valorS1) + Number(valorS2) + Number(valorS3)) / 3
            setresultado(media)
            setPassou(situacao(media))  
        }
        
    }

    function situacao(media) {
        if (media >= 6) {
            return 'True.'
        } else{
            return 'False.'
        }
    }

    
    return (

    
    <div className="e5">
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
            <h1>Exercício 05 - Calculando média do aluno</h1>
        </div>

        <div className="borda">

        </div>

        <div className="quadrado1">
            <p>Implementar um programa de JavaScript para verificar se um aluno passou ou não, baseado em três notas, considerando que a média mínima para passar é 6.  </p>
        </div>

        <div className="q2">
            <div className="bola1">
                <h3>Primeira Nota</h3>

                <input className="input1" type="Number" value={valorS1} onChange={e => setValorS1(e.target.value)} />
            </div>

            <div className="bola2">
                <h3>Segunda Nota</h3>

                <input className="input2" type="Number" value={valorS2} onChange={e => setValorS2(e.target.value)}/>
            </div>

            <div className="bola3">
                <h3>Terceira Nota</h3>

                <input className="input3" type="Number" value={valorS3} onChange={e => setValorS3(e.target.value)} />

                
            </div>
            
                <button className="b" onClick={calculo}>Executar</button>
                
            
        </div>
            <p className="mensagem">A média é {resultado.toFixed(2)} O aluno passou? {passou} </p>
    </div>
       
       
        
        
    );
}