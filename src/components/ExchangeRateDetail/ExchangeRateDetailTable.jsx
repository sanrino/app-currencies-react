import React from "react";
import { Table } from "react-bootstrap";

export const ExchangeRateDetailTable = ({ dataFrom, dataTo }) => {
  return (
    <div>
      {dataFrom && dataTo && (
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>Название валюты </th>
              <th>Курс на {dataFrom.exchangedate}</th>
              <th>Курс на {dataTo.exchangedate}</th>
              <th>Прирост валюты</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dataFrom.txt}</td>
              <td>{dataFrom.rate} ₴</td>
              <td>{dataTo.rate} ₴</td>
              <td>{Number(dataTo.rate - dataFrom.rate)}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};
