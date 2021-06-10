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
                    <h1> Les 3 raisons de ma candidature </h1>
                    <p> Votre entreprise a su trouver les mots pour me convaincre de postuler et de quitter le freelancing.</p>
                </div>

                <div className = "Piliers flex">
                    <div className = "Pilier">
                        <div className = "Picto flex">
                            <img src = {GestionDuTalent} alt = "Gestion du Talent" className = "resp"></img>
                        </div>
                        <h2> Une structure jeune, dynamique et experte </h2>
                        <p>De par son impressionnant palmarès et son expertise dans une pluralité de domaines du web, Kicklox me semble la plus à même de développer (jeu de mot totalement recherché) encore mes compétences.</p>
                    </div>
                    <div className = "Pilier">
                        <div className = "Picto flex">
                            <img src = {Marketplace} alt = "Gestion du Talent" className = "resp"></img>
                        </div>
                        <h2> Un cadre de travail séduisant</h2>
                        <p>  Une moyenne d'age jeune, un cadre dynamique, une table de ping-pong tout cela me semble l'équation parfaite pour m'épanouir pleinement au sein d'une structure en adéquation avec mes valeurs et ambitions.</p>
                    </div>
                    <div className = "Pilier">
                        <div className = "Picto flex">
                            <img src = {Staffing} alt = "Gestion du Talent" className = "resp"></img>
                        </div>
                        <h2> Travailler dans un cadre pluridisciplinaire  </h2>
                        <p> Au cours de mes expériences passées j'ai appris que travailler avec une équipe pluridisciplinaire est une expérience extrèmement enrichissante et que je recherche dans chacuns des projets que j'entreprends. </p>
                    </div>
                    
                </div>
                <Button content = "Mon portfolio"/>
            </div>
        </div>
    )
}