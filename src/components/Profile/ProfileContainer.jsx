import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile, getUser } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 24605;
        }
        this.props.getUser(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent =  withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getUser })(WithUrlDataContainerComponent);