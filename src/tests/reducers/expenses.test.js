import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id,
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1',
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const newExpense = {
		id: 4,
		description: 'car payment',
		note: '',
		amount: 30000,
		createdAt: moment(),
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense: newExpense,
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, newExpense]);
});

test('should edit an expense when a valid id is passed', () => {
	const updates = { description: 'Gumballs' };
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[0].id,
		updates,
	};
	const state = expensesReducer(expenses, action);
	expect(state[0].description).toBe('Gumballs');
});

test('should not edit an expense when an invalid id is passed', () => {
	const updates = { description: 'Gumballs' };
	const action = {
		type: 'EDIT_EXPENSE',
		id: 'badID',
		updates,
	};
	const state = expensesReducer(expenses, action);
	expect(state[0].description).not.toBe('Gumballs');
	expect(state).toEqual(expenses);
});
