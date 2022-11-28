import { useState, useEffect } from "react";
// import { ThemeProvider } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

import Header from '../../components/Header';

import './App.css';

const Home = () => {
  return (
    <div className="container">
        <Container>
          <Header/>
          <Typography variant="h2" color={"black"}> Hola Mundo</Typography>
        </Container>
    </div>
  );
}

export default Home;
