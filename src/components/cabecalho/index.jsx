import "./index.scss"; 
import {Link} from 'react-router-dom'

export default function Cabecalho(props) {
    return (
    <div className="cabecalho">
        <div className="infos">
            <img id='logoFrei' src="https://acaonsfatima.org.br/wp-content/uploads/2018/11/logo.png" alt="" />
            <p>React FreiS</p>

            <div className="text">
                <Link className="inicio" to='/'>Inicio</Link>
                <Link className="sobre" to='/Sobre'>Sobre</Link>  
            </div>
        </div>
    </div>
)}