import { BottomNavigation, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <BottomNavigation
        showLabels
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
          &copy; Shoe Kart
        </Typography>
      </BottomNavigation>
    </div>
  );
};

export default Footer;
