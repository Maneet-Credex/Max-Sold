import React from "react";
import styles from ".././styles/Footer.module.css";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  Avatar,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexGrow: 1,
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <Box>
            <img src="/logo.png" alt="Maxsold logo" width={"200px"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography>Are you looking to</Typography>
            <Button
              variant="outlined"
              sx={{
                borderColor: "red",
                color: "#0E0E0E",
                borderRadius: "10px",
                "&:hover": {
                  borderColor: "red",
                },
              }}
            >
              SELL
            </Button>
          </Box>
        </Box>
        <Grid
          container
          spacing={5}
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <Grid item xs={2}>
            <Typography
              display="block"
              marginBottom={2}
              sx={{ fontWeight: "bolder" }}
            >
              Auctions
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              onClick={() => router.push("/trending")}
            >
              Trending Auctions
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Past Auctions
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              display="block"
              marginBottom={2}
              sx={{ fontWeight: "bolder" }}
            >
              Categories
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Arts & Collectibles
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Comics
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Furniture
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Home - Indoor
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Musical Instruments
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Browse more
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              display="block"
              marginBottom={2}
              sx={{ fontWeight: "bolder" }}
            >
              Partners
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Our Partners
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Enterprise Partners
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              display="block"
              marginBottom={2}
              sx={{ fontWeight: "bolder" }}
            >
              Rescources
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              FAQs
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Newsroom
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Careers
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              display="block"
              marginBottom={2}
              sx={{ fontWeight: "bolder" }}
            >
              Other links
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              About
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Blog
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Locations
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Sell on MaxSold
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0px",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Avatar>
              <FacebookOutlinedIcon />
            </Avatar>
            <Avatar>
              <SportsEsportsOutlinedIcon />
            </Avatar>
            <Avatar>
              <FacebookOutlinedIcon />
            </Avatar>
            <Avatar>
              <SportsEsportsOutlinedIcon />
            </Avatar>
            <Avatar>
              <FacebookOutlinedIcon />
            </Avatar>
            <Avatar>
              <SportsEsportsOutlinedIcon />
            </Avatar>
          </Stack>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="Age"
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          bgcolor: "#313339",
          color: "#FFFFFF",
          p: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography>Terms & Conditions</Typography>
        <Typography>Privacy Policy</Typography>
        <Typography>Legal Disclamer</Typography>
      </Box>
    </>
  );
};

export default Footer;
