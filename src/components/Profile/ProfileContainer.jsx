import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorisedUserId;
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
			</div>
		);
	}
}
 
let mapStateToProps = (state) => {
	return ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorisedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
})};

export default compose(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
	withRouter,
	withAuthRedirect)
	(ProfileContainer)
