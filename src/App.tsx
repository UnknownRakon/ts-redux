import { Container } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/AppBar";
import UserPage from "./components/UserPage";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="xl" sx={{ paddingTop: 3 }}>
        <Routes>
          <Route path={"/"} element={<UserPage />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
