import './index.scss'


export default function Quadrado({texto}) {
    return (
        <div className="cont">
            <div className="quadrado">
            <p>{texto}</p>
        </div>
        </div>
    )
}