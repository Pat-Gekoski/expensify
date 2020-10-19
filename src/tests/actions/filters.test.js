import { TestScheduler } from 'jest';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0),
	});
});

test('should generate set end date action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0),
	});
});

test('should set text filter value of action object', () => {
	const action = setTextFilter('date');
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'date',
	});
});

test('should set text filter value of action object to empty string when no value provided', () => {
	const action = setTextFilter();
	// expect(action.text).toBe(''); // <-- another way
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: '',
	});
});

test('should set action object type to SORT_BY_AMOUNT', () => {
	const action = sortByAmount();
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT',
	});
});

test('should set action object type to SORT_BY_DATE', () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: 'SORT_BY_DATE',
	});
});
