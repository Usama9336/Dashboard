import React from 'react';
import { Line } from 'react-chartjs-2';

const Charts= () => {
    // Data for the graph
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Curve Graph',
          data: [10, 20, 30, 40, 50, 60],
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.4, // Set the tension for the curve
        },
      ],
    };
  
    return (
      <div>
        <Line data={data} />
      </div>
    );
  };