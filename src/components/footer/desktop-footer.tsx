import {
  Grid,
  Container,
  Typography,
  useTheme,
  Divider,
  Stack,
  Toolbar,
  IconButton,
} from "@mui/material";
import Logo from "../../assets/Logo.svg";
import { FOOTER_DATA } from "../../data/constants";
import { Link } from "react-router-dom";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function DesktopFooter() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" component="footer">
      <Grid container spacing={15} py={4}>
        <Grid item flex={1}>
          <img src={Logo} alt="tastebite logo" width={100} />
          <Typography
            paragraph
            variant="body2"
            color={theme.palette.grey[500]}
            maxWidth="400px"
            pt={1}
          >
            “On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment"
          </Typography>
        </Grid>

        {FOOTER_DATA.map((data) => (
          <Grid item key={data.id}>
            <Typography fontWeight={500} variant="body2" gutterBottom>
              {data.title}
            </Typography>
            {data.links.map((link) => (
              <Typography
                variant="body2"
                key={link.id}
                color="GrayText"
                component={Link}
                to={link.link}
                display="block"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  ":hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {link.title}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>

      <Divider />

      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="body2"
          display="flex"
          alignItems="center"
          gap={1}
          color={theme.palette.grey[500]}
          pt={2}
        >
          <CopyrightIcon fontSize="small" /> Tastebite - All rights reserved
        </Typography>

        <Toolbar>
          <IconButton>
            <InstagramIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <FacebookRoundedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <TwitterIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </Stack>
    </Container>
  );
}
