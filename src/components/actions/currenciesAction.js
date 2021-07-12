import axios from "axios";
import { setCurrenciesAction } from "../reducers/currenciesReducer";
import { setConfigDataAction } from "../reducers/exchangeRateReducer";

export const configData = (
  startDate,
  quarteDate,
  averageDate,
  preEndDate,
  endDate,
  valcode
) => {
  return async (dispatch) => {
    if (!!startDate && !!endDate) {
      const response = await axios.all([
        axios.get(
          `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valcode}&date=${startDate}&json`
        ),
        axios.get(
          `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valcode}&date=${quarteDate}&json`
        ),
        axios.get(
          `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valcode}&date=${averageDate}&json`
        ),
        axios.get(
          `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valcode}&date=${preEndDate}&json`
        ),
        axios.get(
          `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valcode}&date=${endDate}&json`
        ),
      ]);

      const points = {
        start: response[0].data[0],
        quarte: response[1].data[0],
        average: response[2].data[0],
        preEnd: response[3].data[0],
        end: response[4].data[0],
      };
      dispatch(setConfigDataAction(points));
    }
  };
};

export const getCurrencies = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    );
    dispatch(setCurrenciesAction(response.data));
  };
};
