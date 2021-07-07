const SET_CURRENCIES = "SET_CURRENCIES";
const SET_CURRENCIES_FROM = "SET_CURRENCIES_FROM";
const SET_CURRENCIES_TO = "SET_CURRENCIES_TO";

const defaultState = {
  items: [],
  isFetching: true,
  itemsFrom: [],
  itemsTo: [],
};

export const currenciesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENCIES:
      return {
        ...state,
        items: action.payload,
      };
    case SET_CURRENCIES_FROM:
      return {
        ...state,
        itemsFrom: action.payload,
      };
    case SET_CURRENCIES_TO:
      return {
        ...state,
        itemsTo: action.payload,
      };
    default:
      return state;
  }
};

export const setCurrenciesAction = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});

export const setCurrenciesFromAction = (payload) => ({
  type: SET_CURRENCIES_FROM,
  payload,
});

export const setCurrenciesToAction = (payload) => ({
  type: SET_CURRENCIES_TO,
  payload,
});
