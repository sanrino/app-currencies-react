import React, { useEffect, useRef, useState } from "react";
import uniqId from "uniqid";

import { Line } from "react-chartjs-2";

export const ExchangeRateDetailChart = ({ pointsData }) => {
  const [chartData, setChartData] = useState({});

  const dates = pointsData.map(({ exchangedate }) => exchangedate);
  const rates = pointsData.map(({ rate }) => rate);

  const chart = () => {
    setChartData({
      labels: dates,
      datasets: [
        {
          label: [pointsData[0].cc],
          data: rates,
          backgroundColor: "rgba(75,192,192,0.6)",
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, [pointsData]);

  return (
    <div>
      {<Line data={chartData} type="line" id={uniqId()} key={uniqId()} />}
    </div>
  );
};
