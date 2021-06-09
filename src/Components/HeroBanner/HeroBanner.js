import React from 'react'

// Components
import Button from '../Utils/Button'

// STYLING
import './HeroBanner.css'
import '../../Utilitaries/Services.css'

export default function HeroBanner(){
    return (
        <div className = "HeroBanner "> 
            <div className = "container flex">
                <div className = "Wording">
                    <h1>Accédez à un vivier de compétences pour réaliser tous vos projets</h1>
                    <h2>Prestation de service, pré-embauche, recrutement.</h2>
                    <div className = "Chiffre flex">
                        <p>71 074</p>
                        <p>ingénieurs et talents tech proposent leurs expertises
                        aux grands groupes industriels sur Kicklox.</p>
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
                                <legend>Quel est votre besoin ? <span className = "astérisque">*</span></legend>
                                <label><input type="radio" name="radio"/> Collaborer avec un freelance</label>
                                <label><input type="radio" name="radio"/> Recruter un talent (CDI)</label>
                                <label><input type="radio" name="radio"/> Effectuer un portage commercial</label>
                                <label><input type="radio" name="radio"/> Accéder à notre CVthèque</label>
                                <label><input type="radio" name="radio"/> Accéder à un outil de gestion des ressources avec matching</label>
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