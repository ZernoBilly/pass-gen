import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Validation from "./pages/Validation/Validation";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Validation />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
