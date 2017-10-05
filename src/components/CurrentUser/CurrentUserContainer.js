import { connect } from 'react-redux';
import { CurrentUser } from './CurrentUser';

const mapStateToProps = (state) => {
  const currentUser = state.get("currentUser");
  // It's best practice to only pass immutable types to our display components
  return {
    name:currentUser.get("name"),
    status:currentUser.get("status"),
    id:currentUser.get("id")
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateStatus:({target:{value}}) => {
      console.log("Updating status...", value);
    }
  }
};

export const CurrentUserContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentUser);