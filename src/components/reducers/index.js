import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { currenciesReducer } from "./currenciesReducer";
import { exchangeRateReducer } from "./exchangeRateReducer";

const rootReducer = combineReducers({
  currencies: currenciesReducer,
  exchangeRate: exchangeRateReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
