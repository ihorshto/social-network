import StoreContext from "../../StoreContext";
import Friends from "./Friends";

const FriendsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().sidebar;

          <Friends state={state} />
        }
      }
    </StoreContext.Consumer>
  )
}

export default FriendsContainer;