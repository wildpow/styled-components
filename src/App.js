import React, { Component } from 'react';
import logo from './logo.svg';
import styled, { keyframes, css } from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  color: red;
`
const LogoSpin  = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`

const spinAnimation = () => css`animation: ${LogoSpin} infinite ${props => props.time || 20}s linear;`

const Logo = styled.img`
  ${props => spinAnimation()};
  height: 80px;
`

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Title = styled.h1`
  font-size: 1.5em;
`

const Intro = styled.p`
  font-size: large;
`
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={logo} alt="logo" time={2}/>
          <Logo src={logo} alt="logo" time={20}/>
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Wrapper>
    );
  }
}

export default App;
