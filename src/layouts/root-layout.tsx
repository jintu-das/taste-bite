import { Outlet } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";

import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" component="main" sx={{ py: 2 }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
