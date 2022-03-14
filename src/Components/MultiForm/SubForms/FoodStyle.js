import React, {useRef, useEffect} from 'react'
import './SubForm.css'

function FoodStyle({modifyIndex}) {

    const preventFunc = e => {
        e.preventDefault()

        const styleData = {
            foodStyle: []
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
            <label htmlFor='italian'> Italienne</label>
            <input 
            ref = {addCheck}
            type = "checkbox"
            id = 'italian'
            value = 'italian'
            />
            <label htmlFor='japanese'> Japonaise</label>
            <input 
            ref = {addCheck}
            type = "checkbox"
            id = 'japanese'
            value = 'japanese'
            />
            <label htmlFor='indian'> Indienne</label>
            <input 
            ref = {addCheck}
            type = "checkbox"
            id = 'indian'
            value = 'indian'
            />
            <label htmlFor='thai'> Thaïlandaise</label>
            <input 
            ref = {addCheck}
            type = "checkbox"
            id = 'thai'
            value = 'thai'
            />
            <label htmlFor='french'> Française</label>
            <input 
            ref = {addCheck}
            type = "checkbox"
            id = 'french'
            value = 'french'
            />
            <label htmlFor='chinese'> Chinoise</label>
            <input 
            ref = {addCheck}
            type = "checkbox"
            id = 'chinese'
            value = 'chinese'
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

export default FoodStyle
