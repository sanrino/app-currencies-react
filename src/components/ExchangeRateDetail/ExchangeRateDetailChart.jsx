import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

export const ExchangeRateDetailChart = ({ dataFrom, dataTo }) => {
  const exchangeRateFrom = useSelector(
    (state) => state.exchangeRate.exchangeRateFrom[0]
  );

  const exchangeRateTo = useSelector(
    (state) => state.exchangeRate.exchangeRateTo[0]
  );


  let labelsRate = [];
  let labelsDate = [];
  if (exchangeRateFrom && exchangeRateTo) {
    labelsRate = [exchangeRateFrom.rate, exchangeRateTo.rate];
    labelsDate = [exchangeRateFrom.exchangedate, exchangeRateTo.exchangedate];
  }

  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: labelsDate,
      datasets: [
        {
          label: "NTCN",
          data: labelsRate,
          backgroundColor: "rgba(75,192,192,0.6)",
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, [exchangeRateFrom, exchangeRateTo]);

  return <div>{<Line data={chartData} />}</div>;
};
