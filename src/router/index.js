import "@mui/material";
import "react-icons";
import "react-icons/bi";
import "react-icons/md";
import "react-icons/bs";
import "react-router-dom";
import { CssBaseline } from "@mui/material";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import PostView from "../views/PostView";
import CreatePostView from "../views/CreatePostView";
import ProfileView from "../views/ProfileView";
import LoginView from "../views/LoginView";
import SignupView from "../views/SignupView";
import ExploreView from "../views/ExploreView";
import PrivateRoute from "../components/util/PrivateRoute";
import SearchView from "../views/SearchView";
import MessengerView from "../views/MessengerView";
import { routes } from "./routes";

function Router() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path={routes.FEED} element={<ExploreView />} />
        <Route path={routes.READ_BLOG(":blogId")} element={<PostView />} />
        <Route
          path={routes.CREATE_BLOG}
          element={
            <PrivateRoute>
              <CreatePostView />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.MESSANGER}
          element={
            <PrivateRoute>
              <MessengerView />
            </PrivateRoute>
          }
        />
        <Route path={routes.SEARCH} element={<SearchView />} />
        <Route path={routes.PROFILE(":userId")} element={<ProfileView />} />
        <Route path={routes.LOGIN} element={<LoginView />} />
        <Route path={routes.SIGNUP} element={<SignupView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
