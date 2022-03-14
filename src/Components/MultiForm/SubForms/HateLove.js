import {useState} from 'react'
import './SubForm.css'

function HateLove({modifyIndex}) {

    const [formData, setFormData] = useState({
        prefs : {
            love : "",
            hate : ""
        }
    })

    const preventFunc = e => {
        e.preventDefault()
    }

    const handleReturn = () => {
        modifyIndex(4)
    }

    const handleTxtArea = (e, pref) => {
        if (pref === 'love') {
            setFormData({
                prefs : {
                    ...formData.prefs, 
                    love : e.target.value
                }
            })
        } else if (pref === 'hate') {
            setFormData({
                prefs : {
                    ...formData.prefs, 
                    hate : e.target.value
                }
            })
        }
    }

    return (
        <form 
        onSubmit={preventFunc}
        className='preferences-form'
        >
            <p>Parle-nous des aliments que tu préfère et que tu détestes !</p>
            <label htmlFor='prefered'> Tes aliments préférés, séparés par une virgule :</label>
            <textarea 
            onChange={e => handleTxtArea(e, 'love')}
            id = "prefered"
            placeholder='un ou plusieurs, si tu en as'
            ></textarea>
            <label htmlFor='hated'> Les aliments que tu ne supportes pas, séparés par une virgule :</label>
            <textarea 
            onChange={e => handleTxtArea(e, 'hate')}
            id = "hated"
            placeholder='un ou plusieurs, si tu en as'
            ></textarea>
            <div className="container-nav-btns">
                <button 
                className='prev'
                type="button"
                onClick={handleReturn}
                >Précédent</button>
                <button
                onClick={() => modifyIndex(6, formData)}
                >Valider</button>
            </div>
        </form>
    )
}

export default HateLove
