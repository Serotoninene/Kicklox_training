import React from 'react'

// COMPONENTS
import Button from '../Utils/Button'

// STYLING 
import './Skills.css'
import '../../Utilitaries/Services.css'

// ASSETS 
import GestionDuTalent from '../../Assets/Images/Gestion-du-talent-300x300.png'
import Marketplace from '../../Assets/Images/Marketplace-B2B-300x300.png'
import Staffing from '../../Assets/Images/Staffing-300x300.png'


export default function Skills(){

    return (
        <div className = "Skills">
            <div className = "container">
                <div>
                    <h1>Les 3 piliers de Kicklox pour réaliser votre projet</h1>
                    <p> Nos savoirs faire complémentaires s'adapte à votre besoin pour vous permettre d'accéder aux compétences techniques.</p>
                </div>

                <div className = "Piliers flex">
                    <div className = "Pilier">
                        <div className = "Picto flex">
                            <img src = {GestionDuTalent} alt = "Gestion du Talent" className = "resp"></img>
                        </div>
                        <h2>La 1ère communauté qualifiée d'ingénieurs et talents tech</h2>
                        <p>Nous construisons, qualifions et fédérons la plus grande communauté d'ingénieurs et talents tech, prête à intervenir sur vos projets.</p>
                    </div>
                    <div className = "Pilier">
                        <div className = "Picto flex">
                            <img src = {Marketplace} alt = "Gestion du Talent" className = "resp"></img>
                        </div>
                        <h2>Une plateforme digitale dédiée au staffing des projets</h2>
                        <p>Place de marché de talents, appel d'offre, matching, notre plateforme automatise, standardise et accélère vos workflows de staffing.</p>
                    </div>
                    <div className = "Pilier">
                        <div className = "Picto flex">
                            <img src = {Staffing} alt = "Gestion du Talent" className = "resp"></img>
                        </div>
                        <h2>Une équipe d'experts métiers pour vous conseiller</h2>
                        <p>Notre équipe dédiée vous accompagne à chaque étape, depuis la spécification jusqu'à la livraison de votre projet.</p>
                    </div>
                    
                </div>
                <Button content = "Demander des informations"/>
            </div>
        </div>
    )
}