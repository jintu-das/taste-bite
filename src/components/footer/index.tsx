import { useTheme, useMediaQuery } from "@mui/material";
import DesktopFooter from "./desktop-footer";
import MobileFooter from "./mobile-footer";

export default function index() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return matches ? <DesktopFooter /> : <MobileFooter />;
}
