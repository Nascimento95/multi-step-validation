import React from 'react'
import './Indicator.css'
import healthy from './icons/healthy.svg'
import love from './icons/love.svg'
import diet from './icons/diet.svg'
import allergy from './icons/allergy.svg'
import thumb from './icons/thumb.svg'

function Indicator(formIndex) {

    console.log("indicator",formIndex)

    return (
        <div className='container-indicator'>
            <div className="container-lines">
                <div 
                className='line upper-line'
                style ={{
                    width: formIndex === 1 ? "0%" 
                         : formIndex === 2 ? "0%"
                         : formIndex === 3 ? "25%"
                         : formIndex === 4 ? "50%"
                         : formIndex === 5 ? "75%"
                         : formIndex === 6 ? "100%"
                         : "0%"         
                }}
                >
                    
                </div>
                <div className='line under-line'></div>
            </div>
            <div className='container-img'>
                <div className='bloc-img'>
                    <img src={healthy} alt="icon" />
                </div>
                <div className='bloc-img'>
                    <img src={love} alt="icon" />
                </div>
                <div className='bloc-img'>
                    <img src={allergy} alt="icon" />
                </div>
                <div className='bloc-img'>
                    <img src={diet} alt="icon" />
                </div>
                <div className='bloc-img'>
                    <img src={thumb} alt="icon" />
                </div>
            </div>
        </div>
    )
}

export default Indicator
