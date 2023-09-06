import CopyrightIcon from "@mui/icons-material/Copyright";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Container from "@mui/material/Container";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { FOOTER_DATA } from "../../data/constants";

export default function MobileFooter() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" component="footer" sx={{ py: 3 }}>
      <img src={Logo} alt="tastebite logo" width={100} />
      <Typography
        paragraph
        variant="body2"
        color={theme.palette.grey[500]}
        maxWidth="400px"
        pt={1}
      >
        “On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment"
      </Typography>
      {FOOTER_DATA.map((data) => (
        <Accordion variant="elevation" elevation={0} key={data.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="body2" fontWeight={500}>
              {data.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {data.links.map((link) => (
              <Fragment key={link.id}>
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
              </Fragment>
            ))}
          </AccordionDetails>
          {/* <Divider /> */}
        </Accordion>
      ))}

      <Stack direction="row" alignItems="center" gap={1} pt={2}>
        <IconButton>
          <InstagramIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <FacebookRoundedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <TwitterIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Typography
        variant="body2"
        display="flex"
        alignItems="center"
        gap={1}
        color={theme.palette.grey[500]}
        pt={1}
        pl={1}
      >
        <CopyrightIcon fontSize="small" /> Tastebite - All rights reserved
      </Typography>
    </Container>
  );
}
