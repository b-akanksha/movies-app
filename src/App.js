import Header from "./components/Header/Header";
import Topics from "./components/Tabs/Tabs";
import Box from "@mui/material/Box";

import "./App.css";

function App() {
  return (
    <Box className="main-div">
      <span className="main-content">
      <Header />
      <span className="spacer" />
      <Box sx={{ display: "flex" }} className="tab-div">
        <Topics />
      </Box>
      </span>
    </Box>
  );
}

export default App;
