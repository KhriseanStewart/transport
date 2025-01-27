import React from 'react'
import './Button.css';

const STYLES = ['btn--primary', 'btn-outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyles) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttomSize) ? buttonSize : SIZE[0]

    return (
        <a href="/signup" className='btn-mobile'>
            <button className={'btn ${checkButtonStyle} ${checkButtonSize}'}
            onClick={type}
            >
                {children}
            </button>

        </a>
    )
};