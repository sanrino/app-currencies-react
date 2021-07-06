import axios from "axios";
import { setCurrenciesAction } from "../reducers/currenciesReducer";

export const getCurrencies = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    );
    dispatch(setCurrenciesAction(response.data));
  };
};
