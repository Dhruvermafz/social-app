import { useTheme } from "@emotion/react";
import {
  Avatar,
  IconButton,
  Stack,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import "../../css/navbar.css";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "react-icons/ai";
import "react-icons/ri";
import {
  AiFillFileText,
  AiFillHome,
  AiFillMessage,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../../helpers/authHelper";
import UserAvatar from "../UserModal/UserAvatar";
import HorizontalStack from "../util/HorizontalStack";
import { RiContrast2Line } from "react-icons/ri";
import { icon } from "../../static";
import { routes } from "../../router/routes";
const Navbar = () => {
  const navigate = useNavigate();
  const user = isLoggedIn();
  const theme = useTheme();
  const username = user && isLoggedIn().username;
  const [search, setSearch] = useState("");
  const [searchIcon, setSearchIcon] = useState(false);
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const mobile = width < 500;
  const navbarWidth = width < 600;

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const handleLogout = async (e) => {
    logoutUser();
    navigate("/login");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?" + new URLSearchParams({ search }));
  };

  const handleSearchIcon = (e) => {
    setSearchIcon(!searchIcon);
  };

  return (
    <header>
      <Stack mb={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            pt: 2,
            pb: 0,
          }}
          spacing={!mobile ? 2 : 0}
        >
          <HorizontalStack>
            <div className="banner">
              <Typography
                sx={{ display: mobile ? "none" : "block" }}
                variant={navbarWidth ? "h6" : "h4"}
                mr={1}
                color={theme.palette.primary.main}
              >
                <Link to="/" color="inherit">
                  <img src={icon} alt={icon} />
                  <strong>ItsABlog</strong>
                </Link>
              </Typography>
            </div>
          </HorizontalStack>

          {!navbarWidth && (
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                size="small"
                label="Search"
                sx={{ flexGrow: 1, maxWidth: 300 }}
                onChange={handleChange}
                value={search}
              />
            </Box>
          )}

          <HorizontalStack>
            {mobile && (
              <IconButton onClick={handleSearchIcon}>
                <AiOutlineSearch />
              </IconButton>
            )}

            <IconButton component={Link} to={"/"}>
              <AiFillHome />
            </IconButton>
            {user ? (
              <>
                <IconButton component={Link} to={`${routes.MESSANGER}`}>
                  <AiFillMessage />
                </IconButton>
                <IconButton
                  component={Link}
                  to={`${routes.PROFILE(user)}` + username}
                >
                  <UserAvatar width={30} height={30} username={user.username} />
                </IconButton>
                <Button onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button
                  variant="text"
                  sx={{ minWidth: 80 }}
                  href={`${routes.SIGNUP}`}
                >
                  Sign Up
                </Button>
                <Button
                  variant="text"
                  sx={{ minWidth: 65 }}
                  href={`${routes.LOGIN}`}
                >
                  Login
                </Button>
              </>
            )}
          </HorizontalStack>
        </Stack>
        {navbarWidth && searchIcon && (
          <Box component="form" onSubmit={handleSubmit} mt={2}>
            <TextField
              size="small"
              label="Search"
              fullWidth
              onChange={handleChange}
              value={search}
            />
          </Box>
        )}
      </Stack>
    </header>
  );
};

export default Navbar;
