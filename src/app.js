import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import AppRouter from './routers/AppRouter';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const app = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(app, document.getElementById('app'));
