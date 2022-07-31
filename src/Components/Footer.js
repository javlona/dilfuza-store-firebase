import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer style={{ background: "#888", color: "#fff" }}>
      <Container maxWidth="xl">
        <Box>
          <Typography variant="body1">
            All rights reserved Dilfuza.com
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
