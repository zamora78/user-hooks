import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListUsers from "./components/Users";
import HomePage from "./Pages/HomePage/HomgePage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./Pages/DetailPage/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:idMember" element={<DetailPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
