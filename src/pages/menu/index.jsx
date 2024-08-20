import Cabecalho from '../../components/cabecalho'
import './index.scss'
import {Link} from 'react-router-dom'

export default function Frei() {
    return (
    <div className="pcp">

    
       <Cabecalho></Cabecalho>

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
                  

            
                <div className="m4">
                    <div className="b4">
                        
                    </div>
                    <h6 className='b'>Valor total por quantidade</h6>

                        <Link className='a' to='/e4'><p>Exercicio 04</p> </Link> 
                    
                    </div>
            

                    <div className="m5">
                    <div className="b5">
                        
                    </div>
                    <h6 className='b'>Média de alunos</h6>

                        <Link className='a' to='/e5'><p>Exercicio 05</p> </Link> 
                    
                    </div>

                    <div className="m6">
                    <div className="b6">
                        
                    </div>
                    <h6 className='b'>Salário líquido</h6>

                        <Link className='a' to='/e6'><p>Exercicio 06</p> </Link> 
                    
                    </div>
            


            <div className="m7">
                    <div className="b7">
                        
                    </div>
                    <h6 className='b'>Calculando o IMC</h6>

                        <Link className='a' to='/e7'><p>Exercicio 07</p> </Link> 
                    
            </div>

            <div className="m8">
                    <div className="b8">
                        
                    </div>
                    <h6 className='b'>Cores primárias</h6>

                        <Link className='a' to='/e8'><p>Exercicio 08</p> </Link> 
                    
            </div>

            <div className="m9">
                    <div className="b9">
                        
                    </div>
                    <h6 className='b'>Temperatura</h6>

                        <Link className='a' to='/e9'><p>Exercicio 09</p> </Link> 
                    
            </div>

            <div className="m10">
                    <div className="b10">
                        
                    </div>
                    <h6 className='b'>Sorveteria</h6>

                        <Link className='a' to='/e10'><p>Exercicio 10</p> </Link> 
                    
            </div>

            <div className="m11">
                    <div className="b11">
                        
                    </div>
                    <h6 className='b'>Tabuada</h6>

                        <Link className='a' to='/e11'><p>Exercicio 11</p> </Link> 
                    
            </div>
            </div>
        </div>
        </div>
    )
}