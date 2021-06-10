import React from 'react'

// Components
import HeroBanner from '../HeroBanner/HeroBanner'
import HireMe from '../HireMe/HireMe'
import Skills from '../Skills/Skills'

// STYLING
import './Homepage.css'

export default function Homepage(){
    return (
        <div>
            <div className = "Homepage">
                <HeroBanner />
                <Skills />
            </div>
            <div className = "HireMe hidden">
                <HireMe />
            </div>
        </div>

    )
}