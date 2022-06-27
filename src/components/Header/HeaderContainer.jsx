import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { authMe, setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';


class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.authMe();
	}

	render() {
		return (
			<Header {...this.props} />
		);
	}
}
const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	userPhoto: state.auth.userPhoto
});

export default connect(mapStateToProps, { setAuthUserData, authMe }) (HeaderContainer)