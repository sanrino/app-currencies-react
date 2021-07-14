import React from "react";
import { Table } from "react-bootstrap";
import uniqId from "uniqid";

export const ExchangeRateDetailTable = ({ pointsData }) => {
  const rounding = (value) => {
    return Number(value).toFixed(2);
  };

  return (
    <div>
      <Table responsive striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>
              <small>Название валюты</small>
            </th>
            {pointsData.map(({ exchangedate }) => {
              return (
                <th key={uniqId()}>
                  <small>Курс на {exchangedate}</small>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pointsData[0].cc}</td>
            {pointsData.map(({ rate }) => {
              return (
                <td key={uniqId()}>
                  <small>{`${rounding(rate)} ₴`} </small>
                </td>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
