import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export const ExchangeRateDetailTable = () => {
  const exchangeRateFrom = useSelector(
    (state) => state.exchangeRate.exchangeRateFrom[0]
  );

  const exchangeRateTo = useSelector(
    (state) => state.exchangeRate.exchangeRateTo[0]
  );

  return (
    <div>
      {exchangeRateFrom && exchangeRateTo && (
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>Название валюты </th>
              <th>Курс на {exchangeRateFrom.exchangedate}</th>
              <th>Курс на {exchangeRateTo.exchangedate}</th>
              <th>Прирост валюты</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{exchangeRateFrom.txt}</td>
              <td>{exchangeRateFrom.rate.toFixed(2)}₴</td>
              <td>{exchangeRateTo.rate.toFixed(2)}₴</td>
              <td>
                {Number(exchangeRateTo.rate - exchangeRateFrom.rate).toFixed(2)}
                ₴
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};
