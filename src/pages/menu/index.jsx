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
            </div>      

            <div className="botoes2">
                <div className="m4">
                    <div className="b4">
                        
                    </div>
                    <h6 className='b'>Valor total por quantidade</h6>

                        <Link className='a' to='/e4'><p>Exercicio 04</p> </Link> 
                    
                    </div>
            



            <div className="m7">
                    <div className="b7">
                        
                    </div>
                    <h6 className='b'>Calculando o IMC</h6>

                        <Link className='a' to='/e7'><p>Exercicio 07</p> </Link> 
                    
            </div>
            </div>
        </div>
        </div>
    )
}