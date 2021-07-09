import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

export const ExchangeRateDetailChart = () => {
  const exchangeRateFrom = useSelector(
    (state) => state.exchangeRate.exchangeRateFrom[0]
  );

  const exchangeRateTo = useSelector(
    (state) => state.exchangeRate.exchangeRateTo[0]
  );

  let labelsRate = [];
  let labelsDate = [];
  let labelChart = "";
  if (exchangeRateFrom && exchangeRateTo) {
    labelsRate = [
      exchangeRateFrom.rate.toFixed(2),
      exchangeRateTo.rate.toFixed(2),
    ];
    labelsDate = [exchangeRateFrom.exchangedate, exchangeRateTo.exchangedate];
    labelChart = exchangeRateFrom.txt;
  }

  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: labelsDate,
      datasets: [
        {
          label: labelChart,
          data: labelsRate,
          backgroundColor: "rgba(75,192,192,0.6)",
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exchangeRateFrom, exchangeRateTo]);

  return <div>{<Line data={chartData} />}</div>;
};
