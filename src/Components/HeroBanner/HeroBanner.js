import React from 'react'

// FONT AWESOME COMPONENTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// STYLING
import './HeroBanner.css'
import '../../Utilitaries/Services.css'
import Form from '../Form/Form'

export default function HeroBanner(){
    return (
        <div className = "HeroBanner "> 
            <div className = "container flex">
                <div className = "Wording">
                    <h1> Parce que les actes sont plus éloquents que les mots, j'ai recodé votre site </h1>
                    <h2>  <a href = "https://alexandrepujol.com/"> <FontAwesomeIcon icon = {faArrowRight}/> Mon Portfolio</a>  </h2>
                    <div className = "Chiffre flex">
                        <p>100 %</p>
                        <p> de ce site a été réalisé grâce à mes compétences en développement front-end.  </p>
                    </div>
                </div>

                <Form />
            </div>
        </div>
    )
}