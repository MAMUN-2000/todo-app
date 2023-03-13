import * as actionsTypes from './actionType';




export const statusChange = (status) => {
	return {
		type: actionsTypes.STATUS_CHANGE,
		payload: status,
	};
};

export const colorChange = (color , changeType) => {
	return {
		type: actionsTypes.STATUS_CHANGE,
		payload: {color,changeType}
	};
};