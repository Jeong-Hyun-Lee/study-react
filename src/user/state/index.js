import {
	createReducer,
	createSetValueAction,
	FETCH_KEY,
	setValueReducer,
} from '../../common/redux-helper';

export const Types = {
	SetValue: 'user/SetValue',
	FetchUser: 'user/FetchUser',
	FetchUpdateUser: 'user/FetchUpdateUser',
	FetchUserHistory: 'user/FetchUserHistory',
	AddHistory: 'user/AddHistory',
};

export const actions = {
	setValue: createSetValueAction(Types.SetValue),
	fetchUser: name => ({ type: Types.FetchUser, name }),
	fetchUpdateUser: ({ user, key, value, fetchKey }) => ({
		type: Types.FetchUpdateUser,
		user,
		key,
		value,
		[FETCH_KEY]: fetchKey,
	}),
	fetchUserHistory: name => ({ type: Types.FetchUserHistory, name }),
	addHistory: history => ({ type: Types.AddHistory, history }),
};

export const INITIAL_STATE = {
	user: undefined,
	userHistory: [],
};

const reducer = createReducer(INITIAL_STATE, {
	[Types.SetValue]: setValueReducer,
	[Types.AddHistory]: (state, action) =>
		(state.userHistory = [action.history, ...state.userHistory]),
});

export default reducer;
