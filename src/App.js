
import './App.css';
import styled from 'styled-components';
import { withAuthenticator } from '@aws-amplify/ui-react'
import Amplify, { API }  from 'aws-amplify'
import { useState, useEffect } from 'react'
import config from './aws-exports'

Amplify.configure(config);

function App() {
  const [peopleState,setPerpleState] = useState([])
  useEffect(()=>{
    callApi()
  },[])

  const callApi = async () => {
    console.log('test')
    // const peopleData = await API.get('peopleapi','/people');
    const peopleData = await API.get('itemapi','/items');
    console.log('peoplleData',peopleData)
    setPerpleState(peopleData.data);
  }
  const Button = styled.button`
    cursor: pointer;
    backgroud: transperent;
    font-size: 16px;
    border--radius: 3px;
    color: #000;
    border: 2px solid #000;
    margin: 0 1 em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  `;
    const Navbar = styled.div`
      height: 60px;
      border-bottom: 2px solid #333;
      padding 2em;
    `;
  const LogoNav = styled.div`
    background: blue;
    padding: .5em 2em;
    border: 2px solid #000;
  `

  return (
    <div className="App">
      <Navbar>
        <LogoNav>My site</LogoNav>
      </Navbar>
      <Button>I'm a Button</Button>
      {
        peopleState&&peopleState.length&&peopleState.map((person) =>(
          <div>
            <h3>{person.name}</h3>
            {/* <p>{person.age}</p> */}
          </div>
        ))
      }
    </div>
  );
}
export default App;
// export default withAuthenticator(App);
