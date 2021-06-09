import React from 'react'

// Components
import HeroBanner from '../HeroBanner/HeroBanner'
import Skills from '../Skills/Skills'

export default function Homepage(){
    return (
        <div className = "Homepage">
            <HeroBanner/>
            <Skills />
        </div>
    )
}