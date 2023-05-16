import React, { useState } from "react";
import { useRouter } from "next/router";
import NavBar from "@/Components/NavBar";
import MobileStepper from "@mui/material/MobileStepper";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import DetailFormCard from "@/Components/DetailFormCard";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LocationForm from "@/Components/LocationForm";
import VerifyAuctionForm from "@/Components/VerifyAuctionForm";
import DateForm from "@/Components/DateForm";
import ThankYouForm from "@/Components/ThankYouForm";
import ErrorForm from "@/Components/ErrorForm";
import Footer from "@/Components/Footer";
import AppContext from "@/Components/AppContext";
import { Provider } from "react-redux";
import store from "../../store/index";

const index = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [location, setLocation] = useState({});
  const [showProgressBar, setshowProgressBar] = useState(true);
  const [territories, setTerritories] = useState([]);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    reasonToSell: 0,
    territoryId: 0,
    countryId: 0,
    countryName: "",
    territoryName: "",
    // soldBy: "",
  });
  console.log(data);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const checkLocation = () => {
    const territory = territories.find((item) => {
      return item.territoryName === location.territoryName && item.isServing;
    });

    return territory ? true : false;
  };

  console.log(activeStep, location);
  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  return (
    <Provider store={store}>
      <AppContext.Provider value={{ data, setData }}>
        <ThemeProvider theme={theme}>
          <NavBar />

          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Divider
                variant="middle"
                sx={{
                  width: "22%",
                  height: "2px",
                  margin: "20px 0",
                  backgroundColor: "#F5F5F5",
                  margin: "0px 10px",
                  "@media (max-width: 400px)": {
                    width: "5%",
                  },
                }}
              />
              <Typography variant="h4" sx={{ fontWeight: "700" }} gutterBottom>
                Let's begin your selling journey
              </Typography>
              <Divider
                variant="middle"
                sx={{
                  width: "22%",
                  height: "2px",
                  margin: "20px 0",
                  backgroundColor: "#F5F5F5",
                  margin: "0px 10px",
                  "@media (max-width: 400px)": {
                    width: "5%",
                  },
                }}
              />
            </Box>

            <Typography
              variant="body1"
              display="block"
              gutterBottom
              sx={{
                "@media (max-width: 400px)": {
                  width: "60%",
                },
              }}
            >
              Our experts will find the sale solution that's right for you.
            </Typography>
            <Container maxWidth="md">
              <Grid
                container
                sx={{
                  margin: "30px 0px",
                }}
              >
                <Grid item md={8} xs={12} sx={{}}>
                  {activeStep >= 1 && activeStep <= 3 && showProgressBar && (
                    <MobileStepper
                      variant="progress"
                      steps={5}
                      position="static"
                      activeStep={activeStep}
                      sx={{
                        maxWidth: "82%",
                        margin: " 0px auto",
                        "& .MuiLinearProgress-root": {
                          width: "100%",
                        },
                      }}
                    />
                  )}
                  {activeStep === 0 && (
                    <DetailFormCard handleNext={handleNext} />
                  )}
                  {activeStep === 1 && (
                    <LocationForm
                      handleNext={handleNext}
                      LocationHandler={setLocation}
                      setTerritories={setTerritories}
                    />
                  )}
                  {activeStep === 2 && !checkLocation() ? (
                    <ErrorForm
                      handleNext={handleNext}
                      showprogressbar={setshowProgressBar}
                      location={location}
                      territories={territories}
                    />
                  ) : (
                    activeStep === 2 &&
                    checkLocation() && (
                      <VerifyAuctionForm
                        handleNext={handleNext}
                        handleBack={handleBack}
                        location={location.territoryName}
                      />
                    )
                  )}

                  {activeStep === 3 && <DateForm handleNext={handleNext} />}
                  {activeStep === 4 && <ThankYouForm handleNext={handleNext} />}
                  {activeStep === 5 && <ErrorForm handleNext={handleNext} />}
                </Grid>

                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ margin: "0px 35px" }}
                />

                <Grid item md={3} xs={12}>
                  <Box sx={{ marginTop: "20px" }}>
                    <Typography variant="h6" sx={{ marginBottom: "15px" }}>
                      Sell your items fast
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        marginBottom: "15px",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          flex: 1,
                        }}
                      >
                        <Avatar
                          sx={{ bgcolor: "#F2F9FB", width: 30, height: 30 }}
                        >
                          <CheckCircleOutlineIcon
                            sx={{
                              color: "#2E6F94",
                              width: 25,
                              height: 25,
                              fontWeight: "lighter",
                            }}
                          />
                        </Avatar>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          flex: 4,
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="body1"
                          sx={{
                            fontWeight: "lighter",
                          }}
                        >
                          Items cleared out on your schedule
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        marginBottom: "15px",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          flex: 1,
                        }}
                      >
                        <Avatar
                          sx={{ bgcolor: "#F2F9FB", width: 30, height: 30 }}
                        >
                          <CheckCircleOutlineIcon
                            sx={{
                              color: "#2E6F94",
                              width: 25,
                              height: 25,
                              fontWeight: "lighter",
                            }}
                          />
                        </Avatar>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          flex: 4,
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="body1"
                          sx={{
                            fontWeight: "lighter",
                          }}
                        >
                          Items cleared out on your schedule
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        marginBottom: "15px",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          flex: 1,
                        }}
                      >
                        <Avatar
                          sx={{ bgcolor: "#F2F9FB", width: 30, height: 30 }}
                        >
                          <CheckCircleOutlineIcon
                            sx={{
                              color: "#2E6F94",
                              width: 25,
                              height: 25,
                              fontWeight: "lighter",
                            }}
                          />
                        </Avatar>
                      </Box>
                      <Box
                        sx={{
                          flex: 4,
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="body1"
                          sx={{
                            fontWeight: "lighter",
                          }}
                        >
                          Items cleared out on your schedule
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        marginBottom: "15px",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          flex: 1,
                        }}
                      >
                        <Avatar
                          sx={{ bgcolor: "#F2F9FB", width: 30, height: 30 }}
                        >
                          <CheckCircleOutlineIcon
                            sx={{
                              color: "#2E6F94",
                              width: 25,
                              height: 25,
                              fontWeight: "lighter",
                            }}
                          />
                        </Avatar>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          flex: 4,
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="body1"
                          sx={{
                            fontWeight: "lighter",
                          }}
                        >
                          Items cleared out on your schedule
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Container>
          <Footer />
        </ThemeProvider>
      </AppContext.Provider>
    </Provider>
  );
};

export default index;
