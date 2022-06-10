import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/index.jsx";
import MachineList from "./components/MachineList";
import MachineInfo from "./components/MachineInfo";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/*" element={} /> */}
        <Route path="machines" element={<MachineList />} />
        <Route path="machines/:id" element={<MachineInfo />} />
      </Routes>
    </>
  );
}

export default App;
