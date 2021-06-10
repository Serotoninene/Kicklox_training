import React, {useEffect, useState} from 'react'

// COMPONENTS
import Popup from '../Popup/Popup'

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
    const [isVisible, setIsVisible] = useState(false)


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
            duration: 0.2,
            color: "#021F63",

        }, 0)

        tl.to('.Navbar  a',{
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

    const handleMouseEnter = () => {
        gsap.fromTo('.Popup',{
            y:100,
            opacity:0
        },
        {
            opacity: 1,
            y:0,
            display: 'flex',
            ease: Power3.ease
        })
    }

    const handleMouseLeave = () => {
        gsap.to('.Popup',{
            opacity: 0,
            y:100,
            display: 'none',
            ease: Power3.easeOut,
            
        })    
    }

    return(
        <div className = 'Navbar fixed'> 
            <div className = "Container flex">
                    <ul className = "Logs flex">
                        <li> Se connecter </li>
                        <li> / </li>
                        <li> S'inscrire </li>
                        <li> - </li>
                        <li> Univers : Kicklox Services <FontAwesomeIcon icon= {faAngleDown}/> </li>
                    </ul>

                <div className = "NavLinks flex">
                    <ul className = "Links flex">
                        <li className = "KickloxLogo"><img className = "resp" alt = "kicklox logo" src = {KicklockLogo}></img></li>
                        <li> <a href = "https://www.linkedin.com/in/alexandre-pujol-333172b3/" >Linkedin </a></li>

                        <li>  <a href = "https://github.com/Serotoninene"> GitHub</a> </li>

                        <li>  <a href = "https://www.instagram.com/serotoninene/"> Instagram</a> </li>
                        <li className = "relative"
                            onMouseEnter = {handleMouseEnter} 
                            onMouseLeave = {handleMouseLeave }>
                                Alexandre 
                            <FontAwesomeIcon icon= {faAngleDown}/>
                            <Popup /></li>
                    </ul>


                    <Button content = "Portfolio"/>
                </div>
            </div>

        </div>
    )
}