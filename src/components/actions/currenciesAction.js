import axios from "axios";
import dayjs from "dayjs";
import { setCurrenciesAction } from "../reducers/currenciesReducer";
import { setConfigDataAction } from "../reducers/exchangeRateReducer";

export const configData = (dates, valcode) => {
  dates = dates.map((day) => {
    return dayjs(day).format("YYYYMMDD");
  });

  return async (dispatch) => {
    if (dates && valcode) {
      const responses = await axios.all(
        dates.map((date) =>
          axios.get(
            `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valcode}&date=${date}&json`
          )
        )
      );
      const points = responses.map((point) => point.data[0]);
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

// export const getCurrencies = () => {
//   const apiUrl =
//     "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

//   return async (dispatch) => {
//     await axios
//       .get(apiUrl)
//       .then((response) => {
//         // handle success
//         dispatch(setCurrenciesAction(response.data));
//       })
//       .catch((error) => {
//         // handle error
//         console.log(`${error} whilst contacting the quote API.`);
//       });
//   };
// };
