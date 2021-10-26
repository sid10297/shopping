import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <div
        style={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          textAlign: "center",
          fontSize: "20px",
          backgroundColor: "#2196f3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/" exact>
            &copy; Shoe Kart
          </NavLink>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
