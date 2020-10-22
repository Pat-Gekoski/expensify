import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export const AddExpensePage = (props) => {
	const onSubmit = (expense) => {
		// props.dispatch(addExpense(expense)); // remember we have access to dispatch
		props.addExpense(expense);
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
		addExpense: (expense) => dispatch(addExpense(expense)),
	};
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
