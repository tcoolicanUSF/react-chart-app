import React from 'react';
import ChartComponent from './ChartComponent.jsx';

const BarChart = ({ data }) => {
    const barChartData = {
      labels: data.months,
      datasets: [
 {
    label: 'Monthly Sales',
    data: data.sales,
    backgroundColor: 'rgba(155, 0, 62, 0.2)', 
    borderColor: 'rgba(155, 0, 62, 1)',
    borderWidth: 1,
},],};
    const barChartOptions = {
        scales: {
          y: {
    beginAtZero: true, 
},},};
      return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
};
 export default BarChart 