import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../api/api';


class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);

		userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			debugger;
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setUsersTotalCount(data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(pageNumber);


		userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items)
		});
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
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
			/>
		</>
	};
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
}

export default connect(mapStateToProps,
	{follow, unfollow, setUsers,
		setCurrentPage, setUsersTotalCount,toggleIsFetching}) (UsersContainer);
