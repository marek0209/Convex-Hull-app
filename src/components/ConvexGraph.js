import React from 'react';
import { Scatter } from 'react-chartjs-2';

import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);


export default function ConvexGraph({ hull, points }) {

  let setOfBoderPoints = [];
  let setOfInnerPointsTemp = [];
  let setOfInnerPoints = [];

  let hullX = [];
  let hullY = [];



  hull.forEach((el) => {
    console.log(el);
    console.log(hullX);
    console.log(hullY);
    console.log(el.pointY);
    console.log(el.pointX);
    console.log("END");
    if (!hullX.includes(el.pointX)) {
      hullX.push(el.pointX);
    }
    if (!hullY.includes(el.pointY)) {

      hullY.push(el.pointY);
    }
  });

hull.forEach((el)=>{
  setOfBoderPoints.push({ x: el.pointX, y: el.pointY })
  console.log('x:', el.pointX, 'y:', el.pointY);
})
  setOfBoderPoints.push(setOfBoderPoints[0]);

  setOfInnerPointsTemp  = points.filter(n => !hull.includes(n));

  setOfInnerPointsTemp.forEach((el)=>{
      setOfInnerPoints.push({ x: el.pointX, y: el.pointY })
      console.log('x:', el.pointX, 'y:', el.pointY);
})



const data = {
  datasets: [{
        label: 'Punkty zewnętrzne',
         data:setOfBoderPoints,
         borderColor: 'black',
         borderWidth: 1,
         pointBackgroundColor: ['#000', '#00bcd6', '#d300d6'],
         pointBorderColor: ['#000', '#00bcd6', '#d300d6'],
         pointRadius: 5,
         pointHoverRadius: 5,
         fill: false,
         tension: 0,
         showLine: true
  }, {
        label: 'Punkty wewnętrzne',
         data:  setOfInnerPoints,
         pointBackgroundColor: 'orange',
         pointBorderColor: 'darkorange',
         pointRadius: 10,
         pointHoverRadius: 10
      }]
   }
  
  const config = {
  type: 'scatter',
  data,
    options: {
      showLine: true,
      pointRadius:12,
    scales: {
      x: {
        grid: {
          borderColor: 'red'
        }
      }
    }
  }
};
  
  console.log(hullY);
  console.log(hullX);
  // if (hullY.length < 3 || hullX.length < 3) {
  //   return <h3>To jest odcinek brak otoczki</h3>
  // }
  return(
<Scatter
      options={config}
      data={data}
      className='chart'
    />

  )
  }
