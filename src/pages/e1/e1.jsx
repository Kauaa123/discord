
import "./e1.scss"; 
import { Link } from 'react-router-dom';
import { useState } from "react";
import Cabecalho from "../../components/cabecalho";
import Quadrado from "../../components/quadrado";

export default function Exercicio1() {
    const [valorS1, setValorS1] = useState(0);
    const [valorS2, setValorS2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function calculo() {
        if (valorS1 > 0) {
           let novo = Number(valorS1) - Number(valorS2)
            setResultado(novo) 
        } else{
        }
    }

    return (
        <div className="e1">
            <Cabecalho titulo='Exercício 01 - Cupom de desconto' />

            <div className="texto">
                <Link to='/'>
                    <img className="seta" src="/assets/images/seta.png"  
                    />
                </Link>
                <h1>Exercício 01 - Cupom de desconto</h1>
            </div>

            <div className="borda"></div>

            <Quadrado 
                texto='Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.' 
            />
            
            <div className="mae">
                <div className="sub">
                    <h4>Informe o valor do pedido</h4>
                    <input id="botaoPedido" type="Number" value={valorS1} onChange={e => setValorS1(Number(e.target.value))} />

                    <h4>Informe o valor do cupom</h4>
                    <input id="botaoCupom" type="Number" value={valorS2} onChange={e => setValorS2(Number(e.target.value))} />

                    <button id="botaoAzul" onClick={calculo}> Executar</button>
                </div>
                <h3 id="textoResposta">Resultado: O total é R${resultado.toFixed(2)}</h3>
            </div>
        </div>
            
    );
}
