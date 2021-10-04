import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Routes from "../Routes";

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
