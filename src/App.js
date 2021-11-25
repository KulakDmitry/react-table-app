import "./App.css";
import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import CustomTable from "./pages/CustomTable";
import RandomTable from "./pages/RandomTable";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
  return (
    <HashRouter className="App" basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/custom-table" element={<CustomTable />} />
        <Route path="/random-table" element={<RandomTable />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
