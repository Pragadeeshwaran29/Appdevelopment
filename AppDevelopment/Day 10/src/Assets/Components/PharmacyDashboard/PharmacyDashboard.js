import React, { useEffect, useState } from 'react';
import './PharmacyDashboard.css';
import Navbar from '../Navbar/Navbar';
import Chart from 'chart.js/auto';

const PharmacyDashboard = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
  
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Sales',
          data: [50, 75, 60, 90, 80, 110],
          backgroundColor: '#4caf50',
        },
        {
          label: 'Expenses',
          data: [40, 65, 80, 70, 60, 85],
          backgroundColor: '#f44336',
        },
      ],
    };

    setChartData(data);

  
    return () => {
      setChartData(null);
    };
  }, []);

  useEffect(() => {
    if (chartData) {
      
      const ctx = document.getElementById('dashboard-chart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
          responsive: true,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: '#e9e9e9',
              },
            },
          },
        },
      });
    }
  }, [chartData]);

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <h2 className="dashboard-heading"></h2>
        <div className="chart-container">
          <canvas id="dashboard-chart" width="400" height="200"></canvas>
        </div>
      </div>
      
    </div>
  );
};

export default PharmacyDashboard;
