import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Container, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../../assets/Logo.svg";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import LoginIcon from "@mui/icons-material/Login";

export default function DesktopNavbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Box bgcolor={(theme) => theme.palette.grey[100]}>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <FacebookIcon />
              </IconButton>
            </Toolbar>

            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <SearchIcon />
              </IconButton>
              <Button
                variant="outlined"
                color="inherit"
                size="medium"
                startIcon={<LoginIcon />}
                sx={{
                  textDecoration: "lowercase",
                  bgcolor: "#fff",
                }}
              >
                Login
              </Button>
            </Toolbar>
          </Stack>
        </Container>
      </Box>
      <Stack justifyContent="center" alignItems="center" py={2}>
        <img src={Logo} alt="tastebite Logo" width={200} />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Button size="medium" color="inherit" endIcon={<ExpandMoreSharpIcon />}>
          Homepage
        </Button>
        <Button size="medium" color="inherit">
          Recipe Page
        </Button>
        <Button size="medium" color="inherit" endIcon={<ExpandMoreSharpIcon />}>
          Pages
        </Button>
        <Button size="medium" color="inherit">
          Buy
        </Button>
      </Stack>
    </AppBar>
  );
}
