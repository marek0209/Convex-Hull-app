import React from 'react'
import { convexHullService } from '../services/ConvexHullService';
import ConvexGraph from './ConvexGraph';
import { Alert} from 'react-bootstrap';
function ConvexHull({ points } ) {
  
  let hull = convexHullService(points, points.length);
  
  if (hull !== undefined) {
    return (
    
      <div>
        <h2 className='title'>Otoczka wypukła</h2>
      <ConvexGraph hull={hull} points={points}  />
      <div className='hull'>
      {hull.map(({ id, pointX, pointY }) => (
          <div key={id}> [{pointX},  {pointY}] </div>
        
      ))}
        
      </div>
      
      </div>
      
    )
  } return (
        <div className='container alert-container'><Alert variant='primary' >Dodaj więcęj punktów aby obliczyć otoczkę wypukłą</Alert> </div>
      
    )
  }

export default ConvexHull;