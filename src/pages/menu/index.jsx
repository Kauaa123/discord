import Cabecalho from '../../components/cabecalho'
import './index.scss'
import {Link} from 'react-router-dom'
import Card1 from '../../components/parte1'

export default function Frei() {

    let obj = [{
        "link": '/e2',
        "titulo": 'Converter kg/gramas',
        "subtitulo": 'Exercicio 02',
        "cor": 'b2',
    },{
        "link": '/e3',
        "titulo": 'Valor total por quantidade',
        "subtitulo": 'Exercicio 03',
        "cor": 'b3',
    },{
        "link": '/e4',
        "titulo": 'Leitura de livro',
        "subtitulo": 'Exercicio 04',
        "cor": 'b4',
    },{
        "link": '/e5',
        "titulo": 'Média de notas',
        "subtitulo": 'Exercicio 05',
        "cor": 'b5',
    },{
        "link": '/e6',
        "titulo": 'Sálario liquído',
        "subtitulo": 'Exercicio 06',
        "cor": 'b6',
    },{
        "link": '/e7',
        "titulo": 'Cores primárias',
        "subtitulo": 'Exercicio 07',
        "cor": 'b7',
    },{
        "link": '/e8',
        "titulo": 'Temperatura',
        "subtitulo": 'Exercicio 08',
        "cor": 'b8',
    },{
        "link": '/e9',
        "titulo": 'Sorveteria',
        "subtitulo": 'Exercicio 09',
        "cor": 'b9',
    },{
        "link": '/e10',
        "titulo": 'Calculo de IMC com histórico',
        "subtitulo": 'Exercicio 10',
        "cor": 'b10',
    },{
        "link": '/e11',
        "titulo": 'Tabuada',
        "subtitulo": 'Exercicio 11',
        "cor": 'b11',
    }]
    return (
    <div className="pcp">

    
       <Cabecalho></Cabecalho>

        <div className="treino">
            <h1>Escolha um treino...</h1>

            
            <div className="botoes">
                  
                <Card1 titulo='Cupom de desconto'
                subtitulo='Exercicio 01'
                cor='b1' 
                link='/e1'/>
            

                {
                    obj.map(card => 
                      <Card1      
                        link={card.link}
                        titulo={card.titulo}
                        subtitulo={card.subtitulo}
                        cor={card.cor}
                        />
                    )
                }
        </div>
        </div>
        </div>
    )
}