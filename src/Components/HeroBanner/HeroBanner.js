import React from 'react'

// COMPONENTS
import Button from '../Utils/Button'

// FONT AWESOME COMPONENTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// STYLING
import './HeroBanner.css'
import '../../Utilitaries/Services.css'

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
                <div className = "Form">
                    <div className = "container">
                        <div className = "Progression flex">
                            <div className = "un flex">
                                <div className = "cercle flex">
                                    1
                                </div>
                                <p>Votre besoin</p>
                            </div>
                            
                            <div className = "line"></div>

                            <div className = "deux flex">
                                <div className = "cercle flex">
                                    2
                                </div>
                                <p>Informations <br></br> de contact</p>
                            </div>
                        </div>

                        <div className = "Inputs flex">
                            <form className = "flex" method="post">
                                <legend> Mes compétences : (toutes les réponses sont valables) <span className = "astérisque">*</span></legend>
                                <label><input type="radio" name="radio"/> Design (suite Adobe, Figma et Procreate) </label>
                                <label><input type="radio" name="radio"/> Développement Front : SCSS, GSAP, ReactJS</label>
                                <label><input type="radio" name="radio"/> Développement Back : PHP, Symfony, NodeJS, MySQL</label>
                                <label><input type="radio" name="radio"/> Trilingue : Français, Anglais, Espagnol </label>
                                <label><input type="radio" name="radio"/> Excellent relationnel et appétance pour le travail en équipe</label>
                                <label className = "moreInfo"> Informations supplémentaires <input type="text" name="moreInfo" placeholder= "Votre Message ..." /></label>
 
                            </form>
                                <Button content = "Suivant"  />
                        </div>

                    </div>
                 
                </div>
            </div>
        </div>
    )
}