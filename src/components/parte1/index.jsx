import './index.scss'
import {Link} from 'react-router-dom'


export default function Card1({titulo, subtitulo, cor, link}) {
    return(
       <div className="m1">
        <div className={cor}>
            
        </div>
        <h6 className='b'>{titulo}</h6>

        <Link className='a' to={link}><p>{subtitulo}</p> </Link> 
    
    </div> 
    )
    
    
}