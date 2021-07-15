import dayjs from "dayjs";

const RATE_FORM = "RATE_FORM";
const SET_CONFIG_DATA = "SET_CONFIG_DATA";

let dateLastMonth = dayjs().subtract(1, "month").toDate();
let dateNow = new Date();

const defaultState = {
  rateForm: {
    currencyCode: "USD",
    startDate: dateLastMonth,
    endDate: dateNow,
  },
  configData: [],
};

export const exchangeRateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RATE_FORM:
      return {
        ...state,
        rateForm: { ...state.rateForm, ...action.payload },
      };

    case SET_CONFIG_DATA:
      return {
        ...state,
        configData: action.payload,
      };

    default:
      return state;
  }
};

export const setRateFormAction = (payload) => ({
  type: RATE_FORM,
  payload,
});

export const setConfigDataAction = (payload) => ({
  type: SET_CONFIG_DATA,
  payload,
});
