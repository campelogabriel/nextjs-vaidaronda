"use client";
import React, { useRef, useEffect } from "react";
import { Chart, ChartConfiguration, registerables } from "chart.js";
Chart.register(...registerables);

interface MyChartProps {
  data: number[];
  labels: string[];
}

const MyChart: React.FC<MyChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartConfig: ChartConfiguration = {
        type: "line", // Pode ser 'line', 'bar', 'pie', etc.
        data: {
          labels,
          datasets: [
            {
              label: "Temperatura",
              data,
              backgroundColor: "#6e799455",
              borderColor: "#527cf1",
              borderWidth: 2,
              fill: true,
              tension: 0.5,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            filler: { propagate: true },
          },
          scales: {
            x: {
              grid: { display: false },
            },
            y: { beginAtZero: true },
          },
        },
      };

      const myChart = new Chart(chartRef.current, chartConfig);

      // Limpeza do gráfico ao desmontar o componente
      return () => {
        myChart.destroy();
      };
    }
  }, [data, labels]);

  return <canvas ref={chartRef}></canvas>;
};

export default MyChart;
