import React, { useState, useEffect } from 'react';
import ChartComponent from './components/ChartComponent/ChartComponent';
import FilterComponent from './components/FilterComponent/FilterComponent';
import HighlightCategory from './components/HighlightCategoryComponent/HighlightCategoryComponent';
import Header from './components/HeaderComponent/HeaderComponent';
import './App.css';
import users100 from './static/thefuck-sample-100.json'
import users1000 from './static/thefuck-sample-1000.json'
import usersFull from './static/thefuck-sample-full.json'
import { getFirstUsers, getPopularUsers, getRecentUsers } from './utils/highlightDataProcessing.js';
import { processStarData } from './utils/dataProcessing.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const firstUsers = getFirstUsers(usersFull);
  const recentUsers = getRecentUsers(usersFull);
  const popularUsers = getPopularUsers(usersFull);
  const [grouping, setGrouping] = useState('month');
  const [type, setType] = useState('absolute');
  const [period, setPeriod] = useState('all')
  const [processedData, setProcessedData] = useState({});

  useEffect(() => {
    const groupedData = processStarData(usersFull, grouping, type, period);
    setProcessedData(groupedData);
  }, [grouping, type, period]);

  return (
    <div className="App">
      <Header title="nvbn/thefuck" />
      <div className="chart-container">
        <ChartComponent processedData={processedData} />
        <FilterComponent grouping={grouping}
          setGrouping={setGrouping}
          type={type}
          setType={setType}
          period={period}
          setPeriod={setPeriod} />
      </div>
      <div className="highlights-section">
        <HighlightCategory title="Primeiros" users={firstUsers} />
        <HighlightCategory title="Últimos" users={recentUsers} />
        <HighlightCategory title="Populares" users={popularUsers} />
      </div>
    </div>
  );
}

export default App;
