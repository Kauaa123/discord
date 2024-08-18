import "./index.scss"; 
import {Link} from 'react-router-dom'
import Cabecalho from  "../../components/cabecalho"

export default function App() {
    return (

    <div className="mae11">
        <Cabecalho />
        <div className="texto">
            <h6>Sobre</h6>
        </div>

        <div className="frase">
            <p>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a <br /> aprimorar suas habilidades em Node.js e lógica de programação de forma prática e <br /> envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o <br /> aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa <br /> praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo <br /> que você avance no seu próprio ritmo e de acordo com suas necessidades. <br /> <br /> Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer <br /> e desenvolver suas habilidades. <br /> Estamos ansiosos para ver seu progresso e sucesso!</p>

            <img className='frei2' src="https://s3-alpha-sig.figma.com/img/7bae/1168/0bf1e929fef0bf14e7f0bc09da2392a4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=deRW01aZ8QlX02JdwXqNP9Re9RqiuZr~ijLH8P7wkwsC5pPenu7WuCGPEsmOx~YIMYntU4y6xm0JxADzNboT-9VnXCQNgj8B8aJx1EhPpddRprcTXKrQSE7IUQBu0zJjBswbSZ3i2q69M-~awJlXCpFXeX1Ai-drJbMb~V6w-82VtvvVSC6pigmBqsv17UTALqtxkLkeQExgsXrgr8glccU7QgcebeJcsbdCPnk8pYFcJgjCwimKaah4PMl2S~DYuKuAu0z6CUIndQcl7j0mKLXFiiUB9cGjvLwlfeW6l~AKuofQpQcKKNBqseqWB4QFG88bSPtT6Cwunbc5nq4Mvw__" alt="" />
        </div>
    </div>
        
    );
}