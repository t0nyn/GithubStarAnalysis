import { Line } from 'react-chartjs-2';

function ChartComponent({ processedData }) {
  const labels = Object.keys(processedData);
  const dataPoints = Object.values(processedData);

  const data = {
    labels,
    datasets: [
      {
        label: 'Número de Estrelas',
        data: dataPoints,
        borderColor: 'rgba(0, 0, 0, 1)',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    radius: 2,
  };

  return (
    <div className="chart-component" style={{ maxWidth: '1000px', margin: '0 auto', height: '600px' }}>
      <Line data={data} options={options} />
    </div>
  );
}
export default ChartComponent;