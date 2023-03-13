/** @format */

import * as actionTypes from "./actionType";

import initialState from "./initialState";

function getUniqeId(arr) {
	const updatedId = arr.reduce((prv, cur) => {
		// const newId = Math.max(cur.id, prv);
		const newId = Math.max(prv,cur.id);

		return newId + 1;
	}, 0);

	return updatedId;
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.ADD:
			return [
				...state,
				{
					id: getUniqeId(state),
					text: action.payload,
					complete: false,
				},
			];

		case actionTypes.DELETE:
			return state.filter((todo) => todo.id !== action.payload);

		case actionTypes.IS_COMPLETE_TOGGLER:
			return state.map((todo) => {
				if (todo.id !== action.payload) {
					return todo;
				} else {
					return {
						...todo,
						complete: !todo.complete,
					};
				}
			});

		case actionTypes.COMPLETE_ALL_TASK:
			return state.map((todo) => {
				return {
					...todo,
					complete: true,
				};
			});

		case actionTypes.CLEAR_COMPLETED_TASK:
			return state.filter((todo) => todo.complete !== true);

		default:
			return state;
	}
}

export default reducer;
