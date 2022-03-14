import React, {useRef} from 'react'
import './SubForm.css'

function Allergies({modifyIndex}) {

    const preventFunc = e => {
        e.preventDefault()

        const styleData = {
            allergies: []
        }
        allCheckBoxes.current.forEach(checkbox => {
            if(checkbox.checked){
                styleData.foodStyle.push(checkbox.value)
            }
            
        })

        modifyIndex(4, styleData)
    }
    
    const allCheckBoxes = useRef([])
    
    const addCheck = element => {
        if(element && !allCheckBoxes.current.includes(element))
        allCheckBoxes.current.push(element)
    }
    
    console.log("mon all",allCheckBoxes)
    
    const handleReturn = () => {
        modifyIndex(2)
    }
    return (
        <form
        className='checkbox-form'
        onSubmit={preventFunc}
        >
            <p>Quelle sont tes cuissines préférées ?</p>
            <span>Choix multiples.</span>
            <label htmlFor='milk'> Lait</label>
            <input 
            ref = {addCheck}
            type = "checkbox"
            id = 'milk'
            value = 'milk'
            />
            <label htmlFor='pollen'> Pollen</label>
            <input 
            ref = {addCheck}
            type = "checkbox"
            id = 'pollen'
            value = 'pollen'
            />
            <label htmlFor='nuts'> Noix</label>
            <input 
            ref = {addCheck}
            type = "checkbox"
            id = 'nuts'
            value = 'nuts'
            />
            <label htmlFor='eggs'> Oeufs</label>
            <input 
            ref = {addCheck}
            type = "checkbox"
            id = 'eggs'
            value = 'eggs'
            />
            <label htmlFor='shellfish'> Fruits de mer</label>
            <input 
            ref = {addCheck}
            type = "checkbox"
            id = 'shellfish'
            value = 'shellfish'
            />
            <div className="container-nav-btns">
                <button 
                onClick={handleReturn}
                type="button" 
                className='prev'
                > Précédent</button>
                <button>Valider</button>
            </div>
        </form>
    )
}

export default Allergies
