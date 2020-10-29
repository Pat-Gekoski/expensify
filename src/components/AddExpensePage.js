import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export const AddExpensePage = (props) => {
	const onSubmit = (expense) => {
		// props.dispatch(addExpense(expense)); // remember we have access to dispatch
		props.startAddExpense(expense);
		props.history.push('/');
	};

	return (
		<div>
			<h1>Add Expense</h1>
			<ExpenseForm onSubmit={onSubmit.bind(this)} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		startAddExpense: (expense) => dispatch(startAddExpense(expense)),
	};
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

