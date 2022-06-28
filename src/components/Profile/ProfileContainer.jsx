import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { Navigate, useParams } from 'react-router-dom';

export function withRouter(Children) {
	return (props) => {
		const match = { params: useParams() };
		return <Children {...props} match={match} />
	}
}

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 24605;
		}
		this.props.getUserProfile(userId);
	}

	render() {
		if (!this.props.isAuth) return <Navigate to="/login" />
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);