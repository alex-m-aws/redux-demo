/*********************
 * State Definition
 *********************/

interface UserState {
  username: string;
}

const initialUserState: UserState = {
  username: ""
}



/*********************
 * Action Definitions
 *********************/

interface ChangeUsernameAction {
  type: "CHANGE_USERNAME",
  username: string;
}

interface ClearUsernameAction {
  type: "CLEAR_USERNAME"
}

type Action = ChangeUsernameAction | ClearUsernameAction;



/*********************
 * Action Creators
 *********************/

export function changeUsername(username: string): ChangeUsernameAction {
  return {
    type: "CHANGE_USERNAME",
    username
  }
}

export function clearUsername(): ClearUsernameAction {
  return {
    type: "CLEAR_USERNAME"
  };
}



/*********************
 * Reducer
 *********************/

export const userReducer = (state: UserState = initialUserState, action: Action) => {
  switch (action.type) {
    case "CHANGE_USERNAME":
      return { ...state, username: action.username };
    case "CLEAR_USERNAME":
      return { ...state, username: "" };
    default:
      return state;
  }
}
