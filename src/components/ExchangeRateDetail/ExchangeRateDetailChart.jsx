import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { exchangeRateAction } from "../reducers/exchangeRateReducer";

export const ExchangeRateDetailChart = ({ dataFrom, dataTo }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exchangeRateAction);
  }, []);

  const exchangeRateFrom = useSelector(
    (state) => state.exchangeRate.exchangeRateFrom
  );

  const exchangeRateTo = useSelector(
    (state) => state.exchangeRate.exchangeRateTo[0]
  );
  useEffect(() => {
    console.log("object");
  }, [exchangeRateFrom, exchangeRateTo]);

  // let labelsRate = [];
  // let labelsDate = [];
  // if (exchangeRateFrom && exchangeRateTo) {
  //   labelsRate = [exchangeRateFrom.rate, exchangeRateTo.rate];
  //   labelsDate = [exchangeRateFrom.exchangedate, exchangeRateTo.exchangedate];
  // }

  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: [],
      datasets: [
        {
          label: "lorem",
          data: [],
          backgroundColor: "rgba(75,192,192,0.6)",
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return <div>{<Line data={chartData} />}</div>;
};
