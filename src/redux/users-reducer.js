import {
	userAPI
} from "../api/api";
import { updateObjectInArray } from "../utils/helpers/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
	fake: 10
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
			}
		}
		case SET_USERS: {
			return {
				...state,
				users: [...action.users]
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage
			}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.count
			}
		}
		case TOOGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching
			}
		}
		case TOOGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
			}
		}
		default:
			return state;
	}
}


export const followSuccess = (userId) => ({
	type: FOLLOW,
	userId
})
export const unfollowSuccess = (userId) => ({
	type: UNFOLLOW,
	userId
})
export const setUsers = (users) => ({
	type: SET_USERS,
	users
})
export const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage
})
export const setUsersTotalCount = (totalUsersCount) => ({
	type: SET_TOTAL_USERS_COUNT,
	count: totalUsersCount
})
export const toggleIsFetching = (isFetching) => ({
	type: TOOGLE_IS_FETCHING,
	isFetching
})
export const toggleFollowingProgress = (isFetching, userId) => ({
	type: TOOGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId
})


export const requestUsers = (page, pageSize) => async (dispatch) => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(page));

	let data = await	userAPI.getUsers(page, pageSize)
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setUsersTotalCount(data.totalCount));
	}

	const followUnfollowFlow =  async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId));
	let data = await apiMethod(userId);
	if (data.resultCode === 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingProgress(false, userId));
	}

export const follow = (userId) => async (dispatch) => {
	let apiMethod = userAPI.follow.bind(userAPI);
	let actionCreator = followSuccess;
	followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
	}

export const unfollow = (userId) => async (dispatch) => {
	let apiMethod = userAPI.unfollow.bind(userAPI);
	let actionCreator = unfollowSuccess;
	followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
	}


export default usersReducer;