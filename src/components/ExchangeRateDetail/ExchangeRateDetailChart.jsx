import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";

export const ExchangeRateDetailChart = ({ pointsData }) => {
  const [chartData, setChartData] = useState({});

  const { start, quarte, average, preEnd, end } = pointsData;

  const chart = () => {
    setChartData({
      labels: [
        start.exchangedate,
        quarte.exchangedate,
        average.exchangedate,
        preEnd.exchangedate,
        end.exchangedate,
      ],
      datasets: [
        {
          label: [start.txt],
          data: [start.rate, quarte.rate, average.rate, preEnd.rate, end.rate],
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

  return <div>{<Line data={chartData} type="line" />}</div>;
};
