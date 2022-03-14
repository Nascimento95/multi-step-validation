import {useState} from 'react'
import './SubForm.css'


function DietForm({modifyIndex}) {

    const [formData , setFormData] = useState({
        dietForm : 'nodiet'
    })

    const preventFunc = e => e.preventDefault()
    
    const handleRadio = e => {
        setFormData({
            dietForm : e.target.value
        })
        
    }
    // console.log(formData)

    return (
        <form 
        onSubmit={preventFunc}
        className= "diet-form"
        >
            <p>Quel est ton régime alimentaire ?</p>

            <label htmlFor='nodiet'> Pas de régime en particulier</label>
            <input
            onChange={handleRadio}
            type= "radio"
            name="diet"
            id="nodiet"
            value = "nodiet"
            />
            <label htmlFor='homnivorous'> Hommnivore</label>
            <input
            onChange={handleRadio}
            type= "radio"
            name="diet"
            id="homnivorous"
            value = "homnivorous"
            />
            <label htmlFor='vegetarian'> Végétarien</label>
            <input
            onChange={handleRadio}
            type= "radio"
            name="diet"
            id="vegetarian"
            value = "vegetarian"
            />
            <label htmlFor='Vegan'> Vegan</label>
            <input
            onChange={handleRadio}
            type= "radio"
            name="diet"
            id="Vegan"
            value = "Vegan"
            />
            <button onClick={() => modifyIndex(3, formData)}> Valider</button>
        </form>
    )
}

export default DietForm
