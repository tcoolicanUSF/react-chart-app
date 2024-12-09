// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import ChartComponent from './src/components/ChartComponent.jsx';
import BarChart from './src/components/BarChart.jsx' 
import './App.css'

function App() {
  return ( 
    <div>
      <h1>My bad Chart</h1>
      <BarChart />
    </div>
  );
}

export default App