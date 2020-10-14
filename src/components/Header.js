import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Navbar, Container } from 'react-bootstrap';

const Border = styled.div`
border: 1px solid #000000;
margin: 5px
`;

function Header(){
  return(
    <Container>
      <Border>
        <Navbar bg="light">
          <Navbar.Brand>Are you a Haiku master?</Navbar.Brand>
        </Navbar>
      </Border>
    </Container>
  )
}

export default Header;