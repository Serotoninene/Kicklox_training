import React from 'react'

//Styling
import './Button.css'

export default function Button(props){

    return (
        <a href = "https://alexandrepujol.com/">
        <div className = "Button flex">
            {props.content}
        </div>
        </a>
    )
}