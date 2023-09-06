import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function RootLayout() {
  return (
    <>
      <CssBaseline />

      <Header />
      <Container maxWidth="lg" component="main" sx={{ py: 2 }}>
        <Outlet />
      </Container>
      <footer></footer>
    </>
  );
}
