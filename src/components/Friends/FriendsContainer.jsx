import { connect } from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state) => {
  return {
    friendsItem: state.sidebar
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;