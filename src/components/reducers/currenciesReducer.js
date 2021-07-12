const SET_CURRENCIES = "SET_CURRENCIES";

const defaultState = {
  currencies: [],
};

export const currenciesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    default:
      return state;
  }
};

export const setCurrenciesAction = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});
