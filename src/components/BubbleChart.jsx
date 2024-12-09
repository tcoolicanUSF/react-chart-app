import React from 'react';
import ChartComponent from './ChartComponent.jsx';
const BubbleChart = ({ data }) => {
    const maxSales = Math.max(...data.sales); 
    const minSales = Math.min(...data.sales);
    const bubbleSize = (sale) => {
        let minSize = 8;  
       let maxSize = 27; 
        return (
          minSize +
          ((sale - minSales) / (maxSales - minSales)) * (maxSize - minSize) 
);};
    const bubbleChartData = {
      datasets: [
{
           label: 'Expenses vs Profits',
    data: data.expenses.map((expense, index) => ({
        x: expense,
        y: data.profits[index],
        r: bubbleSize(data.sales[index]),
            })),
    backgroundColor: 'rgba(278, 105, 180, 0.2)', 
     borderColor: 'rgba(255, 105, 180, 1)',
    borderWidth: 1,
}],};
    const bubbleChartOptions = {
        scales:  {
x: {
    title: {
    display: true,
   text: 'Expenses',
              },
              beginAtZero: false, 
            },
y: {
   title: {
    display: true,
    text: 'Profits',
},
    beginAtZero: false,
},},};
      return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
    };
 export default BubbleChart