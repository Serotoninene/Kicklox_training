import React, {useEffect} from 'react'

// COMPONENTS
import Button from '../Utils/Button'

// GSAP 
import gsap, {Power3} from 'gsap'

// STYLING
import './Form.css'
import '../../Utilitaries/Services.css'


export default function Form(){

    useEffect(() => {

        
        gsap.from(".Form",{
           y:100,
           opacity:0, 
           ease: Power3.easeIn,
           duration: 0.6
        })
    }, [])

    return(
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
    )
}