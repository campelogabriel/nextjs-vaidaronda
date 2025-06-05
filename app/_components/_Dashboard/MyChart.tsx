"use client";
import React, { useRef, useEffect } from "react";
import { Chart, ChartConfiguration, registerables } from "chart.js";
Chart.register(...registerables);

const MyChart = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      //@ts-ignore
      const gradientFill = ctx.createLinearGradient(0, 4, 0, 340);
      gradientFill.addColorStop(0, "rgba(196, 196, 196, 0.507)");
      gradientFill.addColorStop(1, " rgba(255, 255, 255, 0.582)");
      const chartConfig: ChartConfiguration = {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              data,
              pointBackgroundColor: "white",
              backgroundColor: gradientFill,
              borderColor: "#075985",
              borderWidth: 6,
              fill: true,
              tension: 0.6,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              boxPadding: 12,
              boxWidth: 12,
              bodySpacing: 0,
              backgroundColor: "#000",
              padding: 8,
              borderWidth: 2,
            },
            subtitle: { display: false },
            legend: {
              display: false,
            },
            filler: { propagate: true },
            title: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: { display: true },
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
