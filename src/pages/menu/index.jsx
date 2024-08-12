import './index.scss'
import {Link} from 'react-router-dom'

export default function Frei() {
    return (
    <div className="pcp">

    
        <div className="cabecalho">
            <img className='frei' src="https://s3-alpha-sig.figma.com/img/7bae/1168/0bf1e929fef0bf14e7f0bc09da2392a4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=deRW01aZ8QlX02JdwXqNP9Re9RqiuZr~ijLH8P7wkwsC5pPenu7WuCGPEsmOx~YIMYntU4y6xm0JxADzNboT-9VnXCQNgj8B8aJx1EhPpddRprcTXKrQSE7IUQBu0zJjBswbSZ3i2q69M-~awJlXCpFXeX1Ai-drJbMb~V6w-82VtvvVSC6pigmBqsv17UTALqtxkLkeQExgsXrgr8glccU7QgcebeJcsbdCPnk8pYFcJgjCwimKaah4PMl2S~DYuKuAu0z6CUIndQcl7j0mKLXFiiUB9cGjvLwlfeW6l~AKuofQpQcKKNBqseqWB4QFG88bSPtT6Cwunbc5nq4Mvw__" alt="" />

            <p>React FreiS</p>

            <div className="s">
            <Link className="inicio" to='/'>Inicio</Link>
                <Link className="sobre" to='/Sobre'>Sobre</Link>
            </div>
        </div>

        <div className="treino">
            <h1>Escolha um treino...</h1>

            
            <div className="botoes">
                  
                <div className="m1">
                    <div className="b1">
                        
                    </div>
                    <h6 className='b'>Cupom de desconto</h6>

                    <Link className='a' to='/e1'><p>Exercicio 01</p> </Link> 
                    
                </div>
            

            <div className="m2">
                    <div className="b2">
                        
                    </div>
                    <h6 className='b'>Converter Kg/gramas</h6>

                    <Link className='a' to='/e2'><p>Exercicio 02</p> </Link> 
                    
                </div>

                <div className="m3">
                    <div className="b3">
                        
                    </div>
                    <h6 className='b'>Valor total por quantidade</h6>

                        <Link className='a' to='/e3'><p>Exercicio 03</p> </Link> 
                    
                </div>
            </div>      

            <div className="m4">
                    <div className="b4">
                        
                    </div>
                    <h6 className='b'>Valor total por quantidade</h6>

                        <Link className='a' to='/e4'><p>Exercicio 04</p> </Link> 
                    
                    </div>
            </div>

            <div className="m5">
                    <div className="b5">
                        
                    </div>
                    <h6 className='b'>Calculando média do aluno</h6>

                        <Link className='a' to='/e5'><p>Exercicio 05</p> </Link> 
                    
            </div>

            <div className="m6">
                    <div className="b6">
                        
                    </div>
                    <h6 className='b'>Calculando o salário</h6>

                        <Link className='a' to='/e6'><p>Exercicio 06</p> </Link> 
                    
            </div> 

            <div className="m7">
                    <div className="b7">
                        
                    </div>
                    <h6 className='b'>Calculando o IMC</h6>

                        <Link className='a' to='/e7'><p>Exercicio 07</p> </Link> 
                    
            </div>
        </div>
    )
}