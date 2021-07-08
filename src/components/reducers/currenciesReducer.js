const SET_CURRENCIES = "SET_CURRENCIES";

const defaultState = {
  items: [],
};

export const currenciesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENCIES:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export const setCurrenciesAction = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});
