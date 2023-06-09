import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/Components/NavBar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme";
import { Box, Typography, Grid, Divider, Container } from "@mui/material";
import PrimaryButton from "@/Components/PrimaryButton";
import VideoPlayer from "@/Components/VideoPlayer";
import FacilityCard from "@/Components/FacilityCard";
import { data } from "@/data";
import ServiciesCard from "@/Components/ServiciesCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuctionCarousel from "@/Components/AuctionCarousel";
import AuctionCard from "@/Components/AuctionCard";
import ItemCarousel from "@/Components/ItemCarousel";
import Map from "@/Components/Map";
import Footer from "@/Components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log();
  const { facilities, services } = data;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <NavBar />

        {/* Section 1 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row", sm: "row" },
            justifyContent: {
              xs: "center",
              md: "space-around",
              sm: "space-around",
            },
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <Box
            sx={{
              [theme.breakpoints.only("xs")]: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              },
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: "bolder",
                [theme.breakpoints.only("xs")]: {
                  textAlign: "center",
                },
              }}
            >
              Clear the clutter, <br />
              take back your time!
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginBottom: 4,
                fontWeight: "lighter",
                [theme.breakpoints.only("xs")]: {
                  textAlign: "center",
                },
              }}
            >
              The most time efficient way to convert a large <br />
              volume of items into cash
            </Typography>
            <PrimaryButton>Get Stared Selling</PrimaryButton>
          </Box>
          <Box>
            {" "}
            <VideoPlayer />
          </Box>
        </Box>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bolder",
            textAlign: "center",
            color: "#18191F",
            marginTop: "20px",
          }}
        >
          Save time and make clearing out simple!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "40px",
          }}
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {facilities.map((data) => (
              <Grid item xs={12} sm={6} md={6}>
                <FacilityCard data={data} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bolder", textAlign: "center", color: "#18191F" }}
        >
          We sell it all
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontWeight: "lighter", textAlign: "center", color: "#3A3B40" }}
        >
          we've sold it all, from the cleaning supplies under the sink, art on
          the wall, to the tools in a rental business
        </Typography>
        <Box sx={{ flexGrow: 1, margin: "50px 50px 0px 50px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            // columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((data) => (
              <ServiciesCard data={data} />
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexGrow: 1,
            padding: "10px",
            margin: "50px 0px 100px 0px",
            bgcolor: "#373A3F",
            color: "#FFFFFF",
          }}
        >
          <Grid container columnSpacing={8}>
            <Grid item md={3} xs={6} sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "bolder" }}
              >
                500K+
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Happy clients
              </Typography>
              <Divider
                sx={{
                  height: 2,
                  backgroundColor: "white",
                  margin: "15px auto 0px auto",
                }}
              />
            </Grid>
            <Grid item md={3} xs={6} sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "bolder" }}
              >
                3M+
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Items given a second life
              </Typography>
              <Divider
                sx={{
                  height: 2,
                  backgroundColor: "white",
                  margin: "15px auto 0px auto",
                }}
              />
            </Grid>
            <Grid item md={3} xs={6} sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "bolder" }}
              >
                40k+
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Completed Auctions
              </Typography>
              <Divider
                sx={{
                  height: 2,
                  backgroundColor: "white",
                  margin: "15px auto 0px auto",
                }}
              />
            </Grid>
            <Grid item md={3} xs={6} sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "bolder" }}
              >
                90%+
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Sell-through rate
              </Typography>
              <Divider
                sx={{
                  height: 2,
                  backgroundColor: "white",
                  margin: "15px auto 0px auto",
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <AuctionCarousel />
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bolder",
            textAlign: "center",
            color: "#000000",
            marginTop: "35px",
          }}
        >
          Checkout past items sold in Kingston Ontario Canada
        </Typography>
        <ItemCarousel />
        <Footer />
      </ThemeProvider>
    </>
  );
}
