import { useTheme, useMediaQuery } from "@mui/material";
import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";

export default function index() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return matches ? <DesktopNavbar /> : <MobileNavbar />;
}
