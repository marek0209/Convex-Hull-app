import React, { useState } from 'react';
import PointForm from './PointForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { ListGroup, Row, Col } from 'react-bootstrap';

const Point = ({ points, removePoint, updatePoint }) => {
  //console.log(points);
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updatePoint(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <PointForm edit={edit} onSubmit={submitUpdate} />;
  }

  return points.map((point, index) => (

    <div className='container points-container' key={index}>
       <Row >
          <Col  lg='10'>
          <ListGroup >
            
            <ListGroup.Item key={point.id} >
                     <Row>
          <Col md='auto'>
                  Punkt X: {point.pointX} Punkt Y: {point.pointY}
                </Col>
              <Col className='icons'>
            <TiEdit
            onClick={() => setEdit({ id: point.id, value: point.text })}
              className='edit-icon'
              size={25}
              
                  />

          <RiCloseCircleLine
            onClick={() => removePoint(point.id)}
              className='delete-icon'
              size={25}
              color='red'
                  />
                  </Col>
                </Row>
          
      </ListGroup.Item>

          </ListGroup>
        </Col>
        <Col  lg='2'></Col>
        </Row>
</div>
  ));
};

export default Point;
