import React, { useState } from 'react';
import PointForm from './PointForm';
import Point from './Point';
import ConvexHull from './ConvexHull';
import { Row, Col } from 'react-bootstrap';



function PointList() {
  const [points, setPoints] = useState([]);
  console.log(points);
  const addPoint = (formData) => {
    if (points.some(e => e.pointY === formData.pointY && e.pointX === formData.pointX)) {
      console.log("Punkt już istnieje");
    } else {
          let point = { id: formData.id, pointX: formData.pointX, pointY: formData.pointY };
    const newPoints = [point, ...points];
    setPoints(newPoints);
}


  };

  const updatePoint = (pointId, newValue) => {

    setPoints(prev => prev.map(item => (item.id === pointId ? newValue : item)));
  };

  const removePoint = id => {
    const removedArr = [...points].filter(point => point.id !== id);

    setPoints(removedArr);
  };

  return (
    <div className='container-fluid'>
      <Row>
        <Col>
      <h2 className='title'>Dodaj Punkty</h2>
      <PointForm onSubmit={addPoint} />
      <Point
        points={points}
        removePoint={removePoint}
        updatePoint={updatePoint}
          />
          </Col>
        <Col>
        <ConvexHull points={points} />
        </Col>
      </Row>

    </div>
  );
}

export default PointList;
