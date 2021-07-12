import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export const ExchangeRateDetailChart = ({ pointsData }) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: [
        pointsData.start.exchangedate,
        pointsData.quarte.exchangedate,
        pointsData.average.exchangedate,
        pointsData.preEnd.exchangedate,
        pointsData.end.exchangedate,
      ],
      datasets: [
        {
          label: [pointsData.start.txt],
          data: [
            pointsData.start.rate,
            pointsData.quarte.rate,
            pointsData.average.rate,
            pointsData.preEnd.rate,
            pointsData.end.rate,
          ],
          backgroundColor: "rgba(75,192,192,0.6)",
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointsData]);

  return <div>{<Line data={chartData} />}</div>;
};
