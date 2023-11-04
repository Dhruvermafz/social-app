import settingsReducer from "./settings/reducer";
import blogReducer from "./blog/reducer";
import notify from "./notify/reducers/notify";

const rootReducer = {
  settings: settingsReducer,
  blog: blogReducer,
  notify: notify,
};

export default rootReducer;
