import settingsReducer from "./settings/reducer";
import blogReducer from "./blog/reducer";
import notify from "./notify/reducers/notify";
import authReducer from "./auth/reducers/authReducer";
const rootReducer = {
  settings: settingsReducer,
  blog: blogReducer,
  notify: notify,
  auth: authReducer,
};

export default rootReducer;
