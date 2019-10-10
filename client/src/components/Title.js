// IMPORTS
import React, {useEffect} from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'

// STYLED COMPONENTS
const TitleContainer = styled.div`
    display: flex;

    margin: 20px;

    .loading {
        background-color: orange;
    }
    .loaded {
        background-color: lightgreen;
    }
`;

// COMPONENT TO EXPORT
function Title({apiData}) {
    console.log(apiData)
    // -- //
    return (
        <TitleContainer>
            {apiData ? 
                <div className="loaded">{apiData.symbol}</div> 
                :
                <div className="loading">Fetching Data</div>} 
        </TitleContainer>
    )
}
// MAP STATE TO PROPS
const mstp = state => {
    console.log('MSTP',state)
    console.log('API DATA',state.r_API.apiData)
    // console.log('symbol',state.r_API.apiData.symbol)
	return {
        apiData: state.r_API.apiData
	}
}

// EXPORT w/ CONNECT
export default connect(
    mstp,
    {},
)(Title)