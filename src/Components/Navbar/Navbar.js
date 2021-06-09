import React, {useEffect} from 'react'

// FONT AWESOME COMPONENTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

// GSAP 
import {gsap, Power3} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

// STYLING
import './Navbar.css'
import '../../Utilitaries/Services.css'

// ASSETS
import KicklockLogo from '../../Assets/Logos/kicklox_logo-300x68.png'
import Button from '../Utils/Button'


export default function Navbar(){

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        let tl = gsap.timeline({
            scrollTrigger : {
                trigger:'.HeroBanner',
                start: 'start+=100px top',
                toggleActions : 'play none none reverse',
                id:'navbar',
            }
        })


        tl.to('.Navbar',{
            backgroundColor: "#FFFFFF",
            color: "#021F63",
            ease: Power3.ease,
            duration: 0.2
        }, 0)

        tl.to('.Navbar .Logs',{
            opacity:0, 
            display:"none",
            ease: Power3.ease,
            duration: 0.2
        }, 0)

    },[])

    return(
        <div className = 'Navbar fixed'> 
            <div className = "Container flex">
                    <ul className = "Logs flex">
                        <li> Se connecter </li>
                        <li> / </li>
                        <li> S'inscrire </li>
                        <li> - </li>
                        <li> Univers : Kicklox Services <FontAwesomeIcon icon= {faAngleDown}/> </li>
                        {/* <a href = "#"> Se connecter / </a> <a href = "#"> S'inscrire </a><span> - Univers : Kicklox Services <i class="fa fa-angle-down" aria-hidden="true"></i></span> */}
                    </ul>

                <div className = "NavLinks flex">
                    <ul className = "Links flex">
                        <li className = "KickloxLogo"><img className = "resp" alt = "kicklox logo" src = {KicklockLogo}></img></li>
                        <li>Vision</li>
                        <li>Offre <FontAwesomeIcon icon= {faAngleDown}/> </li>
                        <li>Solutions <FontAwesomeIcon icon= {faAngleDown}/></li>
                        <li>Ressources <FontAwesomeIcon icon= {faAngleDown}/></li>
                    </ul>

                    <Button content = "Prendre un RDV"/>
                </div>
            </div>

        </div>
    )
}