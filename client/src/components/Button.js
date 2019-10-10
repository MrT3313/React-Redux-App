// IMPORTS
import React from 'react'
import styled from 'styled-components'

// STYLED COMPONENTS
    const ButtonContainer = styled.button`
        display: flex;

        margin: 10px;

        border: 1px solid black;
    `;

// COMPONENT TO EXPORT
    const Button = ({className, text}) => {
        return (
            <ButtonContainer
                className={className}
            >
                {text}
            </ButtonContainer>
        )
    }

// EXPORTS
export default Button