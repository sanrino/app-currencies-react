import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from "../actions/currencies";

import Table from "react-bootstrap/Table";

const CurrentRates = () => {
  const dispatch = useDispatch();

  const currencies = useSelector((state) => state.currencies.items);

  useEffect(() => {
    dispatch(getCurrencies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default CurrentRates;
