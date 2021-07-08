import { formatDate } from "../format/format";

const EXCHANGE_RATE = "EXCHANGE_RATE";
const SET_EXCHANGE_RATE_FROM = "SET_EXCHANGE_RATE_FROM";
const SET_EXCHANGE_RATE_TO = "SET_EXCHANGE_RATE_TO";
const SET_IS_FETCHING_FROM = "SET_IS_FETCHING_FROM";
const SET_IS_FETCHING_TO = "SET_IS_FETCHING_TO";

//current date - 12 months
const dateLastYear = new Date();
dateLastYear.setMonth(dateLastYear.getMonth() - 12);

const defaultState = {
  exchangeRateItem: {
    // currencyCode: "USD",
    // startDate: formatDate(dateLastYear),
    // endDate: formatDate(new Date()),
  },

  exchangeRateFrom: {},
  exchangeRateTo: {},
  isFetchingFrom: true,
  isFetchingTo: true,
};

export const exchangeRateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case EXCHANGE_RATE:
      return {
        ...state,
        exchangeRateItem: { ...state.exchangeRateItem, ...action.payload },
      };
    case SET_EXCHANGE_RATE_FROM:
      return {
        ...state,
        exchangeRateFrom: action.payload,
        isFetchingFrom: false,
      };
    case SET_EXCHANGE_RATE_TO:
      return {
        ...state,
        exchangeRateTo: action.payload,
        isFetchingTo: false,
      };
    case SET_IS_FETCHING_FROM:
      return {
        ...state,
        isFetchingFrom: action.payload,
      };
    case SET_IS_FETCHING_TO:
      return {
        ...state,
        isFetchingTo: action.payload,
      };
    default:
      return state;
  }
};

export const setExchangeRateFromAction = (payload) => ({
  type: SET_EXCHANGE_RATE_FROM,
  payload,
});

export const setExchangeRateToAction = (payload) => ({
  type: SET_EXCHANGE_RATE_TO,
  payload,
});

export const setIsFetchingFrom = (payload) => ({
  type: SET_IS_FETCHING_FROM,
  payload,
});

export const setIsFetchingTo = (payload) => ({
  type: SET_IS_FETCHING_TO,
  payload,
});

//del
export const exchangeRateAction = (payload) => ({
  type: EXCHANGE_RATE,
  payload,
});
