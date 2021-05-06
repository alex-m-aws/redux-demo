import { combineReducers } from "redux";
import { userReducer} from "./User";

export const rootReducer = combineReducers({
  userState: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
