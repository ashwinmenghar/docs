import React from "react";
import Background from "./components/Background";
import ForeGround from "./components/ForeGround";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Background />
              <ForeGround />
            </>
          }
        />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
