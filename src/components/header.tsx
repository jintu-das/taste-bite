import { useMediaQuery, useTheme } from "@mui/material";
import DesktopNavbar from "./navbars/desktop-navbar";
import MobileNavbar from "./navbars/mobile-navbar";

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return matches ? <DesktopNavbar /> : <MobileNavbar />;
}
