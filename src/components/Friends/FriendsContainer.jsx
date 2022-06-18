import Friends from "./Friends";

const FriendsContainer = (props) => {
 let state = props.store.getState().sidebar;

 return <Friends state={state} />
}

export default FriendsContainer;