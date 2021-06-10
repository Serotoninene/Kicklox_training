import React, {useEffect} from 'react'

// GSAP 
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

// STYLING
import './HireMe.css'
import '../../Utilitaries/Services.css'

// Countdown
import Countdown from 'react-countdown'

export default function HireMe(){
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
    }, [])

    return (
        <div>
            {/* ACTUAL PAGE */}
            <div className = "HireMe flex">
        
                <h1 className = "title">ENGAGEZ MOI</h1>
                <h2> mail: pujol.alexandre@hotmail.fr</h2>
                <div className = "countdown">
                <Countdown 
                    date={Date.now() + 100000000} 
                />
                </div>

                <div> <a href = "https://alexandrepujol.com/">Mon portfolio</a></div>
            </div>
        </div>
    )
}