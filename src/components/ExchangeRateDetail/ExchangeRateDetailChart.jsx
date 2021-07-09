import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { formatDate, getDates, reversDate } from "../format/format";
import {
  getPoint0Cyrrency,
  getPoint1Cyrrency,
  getPoint2Cyrrency,
} from "../actions/currencies";

export const ExchangeRateDetailChart = () => {
  const dispatch = useDispatch();

  const exchangeRateFrom = useSelector(
    (state) => state.exchangeRate.exchangeRateFrom[0]
  );

  const exchangeRateTo = useSelector(
    (state) => state.exchangeRate.exchangeRateTo[0]
  );

  const point0 = useSelector((state) => state.exchangeRate.point0Cyrrency);
  const point1 = useSelector((state) => state.exchangeRate.point1Cyrrency);
  const point2 = useSelector((state) => state.exchangeRate.point2Cyrrency);

  let labelsRate = [];
  let labelsDate = [];
  let labelChart = "";

  let startDateForm = "";
  let endDateTo = "";

  if (exchangeRateFrom && exchangeRateTo) {
    labelsRate = [
      exchangeRateFrom.rate.toFixed(2),
      exchangeRateTo.rate.toFixed(2),
    ];
    labelsDate = [exchangeRateFrom.exchangedate, exchangeRateTo.exchangedate];
    labelChart = exchangeRateFrom.txt;

    startDateForm = reversDate(exchangeRateFrom.exchangedate);
    endDateTo = reversDate(exchangeRateTo.exchangedate);
  }

  // get array days
  const datesArray = getDates(new Date(startDateForm), new Date(endDateTo));

  let indexHalf = Math.round(datesArray.length / 2);
  let indexQuarter = Math.round(indexHalf / 2);
  let indexEighth = indexQuarter + indexHalf;

  const dates = datesArray.filter((item, index) => {
    if (index === indexQuarter) {
      return item;
    }
    if (index === indexHalf) {
      return item;
    }
    if (index === indexEighth) {
      return item;
    }
  });

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
    dispatch(getPoint0Cyrrency(exchangeRateFrom.cc, formatDate(dates[0])));
    dispatch(getPoint1Cyrrency(exchangeRateFrom.cc, formatDate(dates[1])));
    dispatch(getPoint2Cyrrency(exchangeRateFrom.cc, formatDate(dates[2])));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exchangeRateFrom, exchangeRateTo]);

  return <div>{<Line data={chartData} />}</div>;
};
