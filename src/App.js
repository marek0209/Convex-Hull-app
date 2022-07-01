import React from 'react';
import './App.css';
import PointList from './components/PointList';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { TbMathFunction } from "react-icons/tb";


function App() {
  return (
    <>
      <Row><Col><Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <TbMathFunction size={40} />
      {'  '}
            Otoczka Wypukła - Jarvis
        </Navbar.Brand>
                </Container>
      </Navbar></Col></Row>
      <Row><Col>
      <PointList /></Col></Row>
        
      
    </>
  );
}

export default App;