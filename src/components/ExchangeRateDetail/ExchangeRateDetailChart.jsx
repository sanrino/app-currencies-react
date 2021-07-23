import React, { useEffect, useState, useRef } from "react";

import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(...registerables);
Chart.register(annotationPlugin);

export const ExchangeRateDetailChart = ({ pointsData }) => {

  const dates = pointsData.map(({ exchangedate }) => exchangedate);
  const rates = pointsData.map(({ rate }) => rate);

  const chartCanvasRef = useRef(null);

  const [isRebuildingCanvas, setIsRebuildingCanvas] = useState(false);

  useEffect(() => {
    setIsRebuildingCanvas(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointsData]);

  useEffect(() => {
    if (isRebuildingCanvas) {
      setIsRebuildingCanvas(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRebuildingCanvas]);

  useEffect(() => {
    const chartCanvas = chartCanvasRef.current

    if (isRebuildingCanvas || !chartCanvas) {
      return;
    }

    const chartInstance = new Chart(chartCanvasRef.current, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: pointsData[0].cc,
            data: rates,
            backgroundColor: "rgba(75,192,192,0.6)",
            borderWidth: 4,
          },
        ],
      },
    });

    return () => {
      chartInstance.destroy();
    }

  }, [isRebuildingCanvas, pointsData]);

  return (
    <div className="chart">
      {isRebuildingCanvas ? undefined : (
        <canvas ref={chartCanvasRef} />
      )}
    </div>
  );
};
