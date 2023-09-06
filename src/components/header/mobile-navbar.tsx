import { useState } from "react";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/Logo.svg";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

export default function MobileNavbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const closeDrawer = () => setOpen(false);
  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          bgcolor: theme.palette.background.default,
          zIndex: theme.zIndex.drawer + 1,
        }}
        elevation={0}
      >
        <Stack
          py={2}
          px={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <img src={Logo} alt="tastebite Logo" width={100} />
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Stack>
      </AppBar>

      <Drawer open={open} anchor="top" onClose={closeDrawer}>
        <Stack pt="72px" pb={3} alignItems="flex-start" px={2}>
          <Button
            size="medium"
            color="inherit"
            endIcon={<ExpandMoreSharpIcon />}
          >
            Homepage
          </Button>
          <Button size="medium" color="inherit">
            Recipe Page
          </Button>
          <Button
            size="medium"
            color="inherit"
            endIcon={<ExpandMoreSharpIcon />}
          >
            Pages
          </Button>
          <Button
            size="medium"
            color="inherit"
            endIcon={<ExpandMoreSharpIcon />}
          >
            Buy
          </Button>
          {/* <Button size="medium" color="inherit">
            Buy
          </Button> */}
        </Stack>
      </Drawer>
    </>
  );
}
