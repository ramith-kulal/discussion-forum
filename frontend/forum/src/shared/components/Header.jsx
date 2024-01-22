import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../modules/user/redux/user-slice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getUserById());
    }
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Brain Mentors Forum App
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              onClick={() => navigate("/create")}
              color="inherit"
              variant="outlined"
              sx={{ marginRight: "16px", fontWeight: "bold" }}
            >
              Submit
            </Button>
            {state.user ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  marginLeft: "auto",
                }}
              >
                <Typography variant="h6" sx={{ marginRight: "8px", fontWeight: "bold" }}>
                  {state.user.name}
                </Typography>
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={handleLogout}
                  sx={{ marginLeft: "16px", fontWeight: "bold" }}
                >
                  Logout
                </Button>
              </Box>
            ) : (
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => navigate("/join")}
                sx={{ marginRight: "35px", fontWeight: "bold" }}
              >
                Join
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
