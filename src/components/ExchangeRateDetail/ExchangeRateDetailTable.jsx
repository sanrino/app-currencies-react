import React from "react";
import { Table } from "react-bootstrap";

export const ExchangeRateDetailTable = ({ pointsData }) => {
  const { start, quarte, average, preEnd, end } = pointsData;

  const rounding = (value) => {
    return Number(value).toFixed(2);
  };
  return (
    <div>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>
              <small>Название валюты</small>
            </th>
            <th>
              <small>Курс на {start.exchangedate}</small>
            </th>
            {quarte.exchangedate && (
              <th>
                <small>Курс на {quarte.exchangedate}</small>
              </th>
            )}
            {average.exchangedate && (
              <th>
                <small>Курс на {average.exchangedate}</small>
              </th>
            )}
            {preEnd.exchangedate && (
              <th>
                <small>Курс на {preEnd.exchangedate}</small>
              </th>
            )}
            {end.exchangedate && (
              <th>
                <small>Курс на {end.exchangedate}</small>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{start.cc}</td>
            <td>{rounding(start.rate)} ₴</td>
            {quarte.rate && <td>{rounding(quarte.rate)} ₴</td>}
            {average.rate && <td>{rounding(average.rate)} ₴</td>}
            {preEnd.rate && <td>{rounding(preEnd.rate)} ₴</td>}
            {end.rate && <td>{rounding(end.rate)} ₴</td>}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
