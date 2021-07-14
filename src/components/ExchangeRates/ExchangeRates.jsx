import React from "react";

import { useSelector } from "react-redux";

import Table from "react-bootstrap/Table";

export const ExchangeRates = () => {
  const currencies = useSelector((state) => state.currencies.currencies);

  return (
    <>
      <h2 className="pb-4">Курс валют НБУ</h2>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Название валюты</th>
            <th className="text-center">Курс НБУ</th>
            <th className="text-center">Дата</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currencie, index) => {
            return (
              <tr key={index}>
                <td>
                  <span className="text-primary">{currencie.txt}</span>
                  <small> ({currencie.cc})</small>
                </td>
                <td className="text-center">{currencie.rate}</td>
                <td className="text-center">{currencie.exchangedate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
