import React from 'react'

//Styling
import './Button.css'

export default function Button(props){

    return (
        <div className = "Button flex">
            {props.content}
        </div>
    )
}