import settingsReducer from "./settings/reducer";
import blogReducer from "./blog/reducer";

const rootReducer = {
  settings: settingsReducer,
  blog: blogReducer,
};

export default rootReducer;
