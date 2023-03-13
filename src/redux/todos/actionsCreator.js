/** @format */

import * as actionsTypes from "./actionType";

export const added = (todoText) => {
	return {
		type: actionsTypes.ADD,
		payload: todoText,
	};
};

export const deleted = (todoId) => {
	return {
		type: actionsTypes.DELETE,
		payload: todoId,
	};
};

export const colorSelect = (todoId, color) => {
	return {
		type: actionsTypes.COLOR_SELECT,
		payload: {
			todoId,
			color,
		},
	};
};

export const allComplete = () => {
	return {
		type: actionsTypes.COMPLETE_ALL_TASK,
	};
};

export const clearComplete = () => {
	return {
		type: actionsTypes.CLEAR_COMPLETED_TASK,
	};
};

export const todoCompletToggoler = (todoId) => {
	return {
		type: actionsTypes.IS_COMPLETE_TOGGLER,
		payload: todoId,
	};
};
