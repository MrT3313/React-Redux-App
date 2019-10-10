import React, {useEffect} from 'react'
import styled from 'styled-components'
// import Button from '../components/Button.js'
import { connect } from 'react-redux'

// IMPORT ACTION CREATORS
import {a_apiCALL} from '../redux/actions/a_apiCALL.js'

// HOOKS
import useInput from '../hooks/useInput.js'
// -- STYLED COMPONENTS -- //
const FormContainer = styled.form`
    display: flex;
    margin-top: 20px;
`;
// const ExtendedButton = styled(Button)`
//     border: 1px solid green;
// `;
// -- COMPONENT TO EXPORT -- //
function SymbolForm(props) {
    const [symbol, handleSymbol, setSymbol] = useInput()
    // -- * -- //
    const handleSubmit = e => {
        e.preventDefault()
        console.log(symbol)
        props.a_apiCALL(symbol)
    }
    // -- * -- //
    useEffect(() => {
        console.log('useEffect Triggered')
        console.log(symbol)
    })
    // -- * -- //
    return (
        <FormContainer
            onSubmit={handleSubmit}
        >
            <input
                type='text'
                value={symbol}
                onChange={handleSymbol}
                placeholder='Enter symbol Here'
            />
            <button
                text={'Submit New symbol'}
            >
                Click Here
            </button>

        </FormContainer>
    )
}

// EXPORT w/ CONNECT
export default connect(
    null,
    {a_apiCALL},
)(SymbolForm)