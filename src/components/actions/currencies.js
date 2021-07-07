import axios from "axios";
import {
  setCurrenciesAction,
  setCurrenciesFromAction,
  setCurrenciesToAction,
} from "../reducers/currenciesReducer";

export const getCurrencies = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    );
    dispatch(setCurrenciesAction(response.data));
  };
};

export const getCurrenciesFrom = (valcode = "AUD", date = "20200302") => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valcode}&date=${date}&json`
    );
    dispatch(setCurrenciesFromAction(response.data));
  };
};

export const getCurrenciesTo = (valcode = "AUD", date = "20210302") => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valcode}&date=${date}&json`
    );
    dispatch(setCurrenciesToAction(response.data));
  };
};
