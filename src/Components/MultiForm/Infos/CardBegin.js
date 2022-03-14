import './Card.css'

function CardBegin({modifyIndex}) {
    return (
        <div className='card'>
            <h1>Aide-nous à ravir tes papille</h1>
            <button onClick={() => modifyIndex(2) } >COMMENCER</button>
        </div>
    )
}

export default CardBegin
