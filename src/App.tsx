import { Container } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/AppBar";
import UserPage from "./components/UserPage";
import CssBaseline from "@mui/material/CssBaseline";
import TodoPage from "./components/TodoPage";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="xl" sx={{ paddingTop: 3 }}>
        <Routes>
          <Route path={"/"} element={<UserPage />}></Route>
          <Route path={"/todos"} element={<TodoPage />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
