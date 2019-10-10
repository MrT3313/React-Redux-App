// IMPORTS
import React, {useEffect} from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'

import './reset.css';

// IMPORT ACTION CREATORS
import { a_apiCALL } from './redux/actions/a_apiCALL.js'

// COMPONENTS
import Button from './components/Button.js'

// STYLED COMPONENTS
const APP_CONTAINER = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 20px;

  border: 1px dashed blue
`;
const EXTENDED_Button = styled(Button)`
  background-color: lightblue;
`;

function App(props) {
  useEffect(() => {
    console.log('useEffect Triggered!')
    // -- // 

    // -- // 
    props.a_apiCALL()

  })
  return (
    <APP_CONTAINER className="AppContainer">
      <div>REDUX API APP</div>

    </APP_CONTAINER>
  );
}

// MAP STATE TO PROPS
const mstp = state => {
	return {
    
	}
}

// EXPORT w/ CONNECT
export default connect(
  null,
  {a_apiCALL},
)(App)
