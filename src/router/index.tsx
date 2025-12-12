import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vue/*" element={<div id="vue" />} />
      <Route path="/react/*" element={<div id="react" />} />
    </Routes>
  );
}