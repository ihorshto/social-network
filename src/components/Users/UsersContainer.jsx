import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
	componentDidMount() {
		const {currentPage, pageSize} = this.props
		this.props.requestUsers(currentPage, pageSize);
	}

	onPageChanged = (pageNumber) => {
		const {pageSize} = this.props;
		this.props.requestUsers(pageNumber, pageSize);
		this.props.setCurrentPage(pageNumber); // current page
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users
				users={this.props.users}
				onPageChanged={this.onPageChanged}
				currentPage={this.props.currentPage}
				setUsers={this.props.setUsers}
				setTotalUsersCount={this.props.setTotalUsersCount}
				totalItemsCount={this.props.totalItemsCount}
				pageSize={this.props.pageSize}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	};
}

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalItemsCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
}

export default compose(
	connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers }))
	(UsersContainer)

