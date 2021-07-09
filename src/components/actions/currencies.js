import axios from "axios";
import { dateCurrent, lastYear } from "../format/format";
import { setCurrenciesAction } from "../reducers/currenciesReducer";
import {
  setExchangeRateFromAction,
  setExchangeRateToAction,
  setIsFetchingFrom,
  setIsFetchingTo,
} from "../reducers/exchangeRateReducer";

let dateLastYear = lastYear(new Date());
let currentDate = dateCurrent(new Date());

export const getCurrencies = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    );
    dispatch(setCurrenciesAction(response.data));
  };
};

export const getExchangeRateFrom = (valcode = "USD", date = dateLastYear) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valcode}&date=${date}&json`
    );
    dispatch(setExchangeRateFromAction(response.data));
    dispatch(setIsFetchingFrom(true));
  };
};

export const getExchangeRateTo = (valcode = "USD", date = currentDate) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valcode}&date=${date}&json`
    );
    dispatch(setExchangeRateToAction(response.data));
    dispatch(setIsFetchingTo(true));
  };
};
