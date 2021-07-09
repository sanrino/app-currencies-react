const EXCHANGE_RATE = "EXCHANGE_RATE";
const SET_EXCHANGE_RATE_FROM = "SET_EXCHANGE_RATE_FROM";
const SET_EXCHANGE_RATE_TO = "SET_EXCHANGE_RATE_TO";
const SET_IS_FETCHING_FROM = "SET_IS_FETCHING_FROM";
const SET_IS_FETCHING_TO = "SET_IS_FETCHING_TO";

const SET_POINT0_CURRENCY = "SET_POINT0_CURRENCY";
const SET_POINT1_CURRENCY = "SET_POINT1_CURRENCY";
const SET_POINT2_CURRENCY = "SET_POINT2_CURRENCY";

const defaultState = {
  exchangeRateItem: {
    // currencyCode: "USD",
    // startDate: formatDate(dateLastYear),
    // endDate: formatDate(new Date()),
  },
  exchangeRateFrom: {},
  exchangeRateTo: {},
  point0Cyrrency: {},
  point1Cyrrency: {},
  point2Cyrrency: {},

  //del
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

    case SET_POINT0_CURRENCY:
      return {
        ...state,
        point0Cyrrency: action.payload,
      };
    case SET_POINT1_CURRENCY:
      return {
        ...state,
        point1Cyrrency: action.payload,
      };
    case SET_POINT2_CURRENCY:
      return {
        ...state,
        point2Cyrrency: action.payload,
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

export const setPoint0CyrrencyAction = (payload) => ({
  type: SET_POINT0_CURRENCY,
  payload,
});
export const setPoint1CyrrencyAction = (payload) => ({
  type: SET_POINT1_CURRENCY,
  payload,
});
export const setPoint2CyrrencyAction = (payload) => ({
  type: SET_POINT2_CURRENCY,
  payload,
});

//dell
export const setIsFetchingFrom = (payload) => ({
  type: SET_IS_FETCHING_FROM,
  payload,
});

//dell
export const setIsFetchingTo = (payload) => ({
  type: SET_IS_FETCHING_TO,
  payload,
});
