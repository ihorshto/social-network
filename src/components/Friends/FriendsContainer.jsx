import { connect } from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state) => {
  return {
    friendsItems: state.sidebar.friendsItems
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;