const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
	  // [{
	  // 		id: 1,
	  // 		photoUrl: 'https://media.istockphoto.com/photos/hologram-human-head-deep-learning-and-artificial-intelligence-picture-id1364105164?b=1&k=20&m=1364105164&s=170667a&w=0&h=0Ehy6gPN70RTirKZ3TP3I0zoQz3bEFpzfSWfi0MhYd8=',
	  // 		followed: false,
	  // 		fullName: "Ihor",
	  // 		status: "I am a man",
	  // 		location: {
	  // 			city: 'Ternopil',
	  // 			country: "Ukraine"
	  // 		}
	  // 	},
	  // 	{
	  // 		id: 2,
	  // 		photoUrl: 'https://media.istockphoto.com/photos/hologram-human-head-deep-learning-and-artificial-intelligence-picture-id1364105164?b=1&k=20&m=1364105164&s=170667a&w=0&h=0Ehy6gPN70RTirKZ3TP3I0zoQz3bEFpzfSWfi0MhYd8=',
	  // 		followed: true,
	  // 		fullName: "Viktor",
	  // 		status: "I am a boss",
	  // 		location: {
	  // 			city: 'Kyiv',
	  // 			country: "Ukraine"
	  // 		}
	  // 	},
	  // 	{
	  // 		id: 3,
	  // 		photoUrl: 'https://media.istockphoto.com/photos/hologram-human-head-deep-learning-and-artificial-intelligence-picture-id1364105164?b=1&k=20&m=1364105164&s=170667a&w=0&h=0Ehy6gPN70RTirKZ3TP3I0zoQz3bEFpzfSWfi0MhYd8=',
	  // 		followed: false,
	  // 		fullName: "Vlad",
	  // 		status: "I am a cool dude",
	  // 		location: {
	  // 			city: 'Lviv',
	  // 			country: "Ukraine"
	  // 		}
	  // 	}
	  // ]
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1
	
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {
							...u,
							followed: true
						}
					}
					return u;
				})
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {
							...u,
							followed: false
						}
					}
					return u;
				})
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
		default:
			return state;
	}
}


export const followAC = (userId) => ({
	type: FOLLOW,
	userId
})
export const unfollowAC = (userId) => ({
	type: UNFOLLOW,
	userId
})
export const setUsersAC = (users) => ({
	type: SET_USERS,
	users
})
export const setCurrentPageAC = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage
})
export const setUsersTotalCountAC = (totalUsersCount) => ({
	type: SET_TOTAL_USERS_COUNT,
	count: totalUsersCount
})




export default usersReducer;