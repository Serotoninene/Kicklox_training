import React from 'react'

// STYLING
import './Popup.css'
import '../../Utilitaries/Services.css'

// PHOTO
import Autoportrait from '../../Assets/Photos/photoRando.png'


export default function Popup(props){

    

    return (
        <div className = "Popup fixed flex hidden">
                <div className = "Alexandre">
                    <h1>Alexandre Pujol</h1>
                    <div className = "Autoportrait">
                        <img className = "resp" src = {Autoportrait} alt = "portrait d'Alexandre à la montagne"></img>
                    </div>
                </div>
                <div className = "Description">
                    <h2> En Bref </h2>
                    <p>Après deux ans de classes préparatoires, un master en marketing 
                    international, plusieurs experiences professionnelles dans le monde 
                    de la culture, une petite carrière dans l'illustration, je me suis 
                    lancé dans l'aventure du développement web, domaine dont je suis tombé
                     amoureux il y a deux ans lorsque j'ai lancé mon premier bootcamp sur 
                     internet. Après une formation accélérée je pense pouvoir être devenir un 
                     véritable atout multifacette pour Kicklox.</p>
                     <br></br>

                     <h3>mail :  pujol.alexandre@hotmail.fr </h3>
                </div>

        </div>
    )
}