import { Box, Stack } from "@mui/material";
import { Navbar } from "./Navbar/Navbar";
import { Sidebar } from "./Sidebar/Sidebar";
import { Router } from "../router";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent='space-around'>
    <Sidebar />
    <Router />
      </Stack>
    </Box>
  );
}

export default App;
