import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from "../actions/currencies";

import Table from "react-bootstrap/Table";

const CurrentRates = () => {
  const dispatch = useDispatch();

  let currencies = useSelector((state) => state.currencies.items);

  currencies = currencies.filter(
    (currencie) =>
      currencie.cc !== "XPD" &&
      currencie.cc !== "XPT" &&
      currencie.cc !== "XAG" &&
      currencie.cc !== "XAU"
  );

  useEffect(() => {
    dispatch(getCurrencies());
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
