import { Routes, Route } from "react-router-dom";
import { Homepage } from "./screens/Homepage";
import { Cars } from "./screens/Cars";
import { Favourites } from "./screens/Favourites";
import { Box } from "@mui/material";

const Router = () => {
  return (
    <Box flex={4} p={2}>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Box>
  );
};
export {Router}