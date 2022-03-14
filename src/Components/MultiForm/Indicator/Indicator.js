import React from 'react'
import './Indicator.css'
import healthy from './icons/healthy.svg'
import love from './icons/love.svg'
import diet from './icons/diet.svg'
import allergy from './icons/allergy.svg'
import thumb from './icons/thumb.svg'

function Indicator() {
    return (
        <div className='container-indicator'>
            <div className="container-line">
                <div className='line upper-line'></div>
                <div className='line upper-line'></div>
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
