"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

interface PopulationChartProps {
  populationData: { year: number; value: number }[];
}

const PopulationChart: React.FC<PopulationChartProps> = ({
  populationData,
}) => {
  // Prepare data for the chart
  const chartData = {
    labels: populationData.map((entry) => entry.year), // Years as labels
    datasets: [
      {
        label: "Population",
        data: populationData.map((entry) => entry.value), // Population values
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="h-64 w-full">
      <Line
        data={chartData}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    </div>
  );
};

export default PopulationChart;
