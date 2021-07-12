import React from "react";
import { Table } from "react-bootstrap";

export const ExchangeRateDetailTable = ({ pointsData }) => {
  return (
    <div>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>
              <small>Название валюты</small>
            </th>
            <th>
              <small>Курс на {pointsData.start.exchangedate}</small>
            </th>
            {pointsData.quarte.exchangedate && (
              <th>
                <small>Курс на {pointsData.quarte.exchangedate}</small>
              </th>
            )}
            {pointsData.average.exchangedate && (
              <th>
                <small>Курс на {pointsData.average.exchangedate}</small>
              </th>
            )}
            {pointsData.preEnd.exchangedate && (
              <th>
                <small>Курс на {pointsData.preEnd.exchangedate}</small>
              </th>
            )}
            {pointsData.end.exchangedate && (
              <th>
                <small>Курс на {pointsData.end.exchangedate}</small>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pointsData.start.cc}</td>
            <td>{Number(pointsData.start.rate).toFixed(2)} ₴</td>
            {pointsData.quarte.rate && (
              <td>{Number(pointsData.quarte.rate).toFixed(2)} ₴</td>
            )}
            {pointsData.average.rate && (
              <td>{Number(pointsData.average.rate).toFixed(2)} ₴</td>
            )}
            {pointsData.preEnd.rate && (
              <td>{Number(pointsData.preEnd.rate).toFixed(2)} ₴</td>
            )}
            {pointsData.end.rate && (
              <td>{Number(pointsData.end.rate).toFixed(2)} ₴</td>
            )}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
