import React, { useState } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
// import {checkIsFloat} from '../services/checkFloatService';

function PointForm(props) {

 

  const [inputX, setInputX] = useState(props.edit ? props.edit.value : '');
  const [inputY, setInputY] = useState(props.edit ? props.edit.value : '');


  const handleChangeInputX = e => {
    setInputX(e.target.value);
  };

  const handleChangeInputY = e => {
    setInputY(e.target.value);
  };


  const handleSubmit = e => {
    e.preventDefault();
    
    //console.log(checkIsFloat(inputX), checkIsFloat(inputY));

    
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        pointX: inputX,
        pointY: inputY
      });
      setInputX('');
      setInputY('');
    
  };

  return (
    <div className='container'>
      <Form onSubmit={handleSubmit} className='point-form'>
      {props.edit ? (
        <Row>
            <Col>
            <Form.Control placeholder="Wprowadź X"
              type='number'
              value={inputX}
              onChange={handleChangeInputX}
              name='point-x'
              className='point-input edit' />
          </Col>
          <Col>
            <Form.Control placeholder="Wprowadź Y"
              type='number'
              value={inputY}
              onChange={handleChangeInputY}
              name='point-y'
              className='point-input edit' />

          </Col>
          <Col>
            <Button onClick={handleSubmit} variant="primary" className='point-button'>
             Aktualizuj
            </Button>
          </Col>
        </Row>
      ) : (
        <Row>
              <Col>
            <Form.Control placeholder="Wprowadź X"
              type='number'
              value={inputX}
              onChange={handleChangeInputX}
              name='point-x'
              className='point-input' />
          </Col>
          <Col>
            <Form.Control placeholder="Wprowadź Y"
              type='number'
              value={inputY}
              onChange={handleChangeInputY}
              name='point-y'
              className='point-input' />

          </Col>
          <Col>
            <Button onClick={handleSubmit} variant="primary" className='point-button'>
              Dodaj Punkt
            </Button>
          </Col>
        </Row>
      )}
    </Form>
  
    </div>
  );
}

export default PointForm;
