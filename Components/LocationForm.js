import React, { useEffect, useState, useContext } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Button,
} from "@mui/material";

import axios from "axios";
import AppContext from "./AppContext";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "@/store/slices/DataSlice";

const LocationForm = ({ handleNext, LocationHandler, setTerritories }) => {
  const [state, setStates] = useState([]);
  const [location, setLocation] = useState({});
  const [selectedState, setSelectedState] = useState(null);
  const [countries, setCountries] = useState([]);
  const [isButtonClicked, setButtonClicked] = useState(false);

  const ctx = useContext(AppContext);
  const dispatch = useDispatch();
  const currentData = useSelector((state) => state.data);

  console.log(state, location, countries, isButtonClicked);

  const handleChange = (event) => {
    const { value, name } = event.target;
    const selectedTerritory = state.find((item) => item.territoryId === value);
    setSelectedState(value);
    LocationHandler(selectedTerritory);
    ctx.setData({
      ...ctx.data,
      territoryId: value,
      territoryName: selectedTerritory?.territoryName || name,
    });
    dispatch(
      setData({
        ...currentData,
        territoryId: value,
        territoryName: selectedTerritory?.territoryName || name,
      })
    );
  };

  const handleClick = (country) => {
    setButtonClicked(true);
    setLocation(country);
    filterTeritories(country.countryId);
    ctx.setData({
      ...ctx.data,
      countryId: country.countryId,
      countryName: country.countryName,
    });
    dispatch(
      setData({
        ...currentData,
        countryId: country.countryId,
        countryName: country.countryName,
      })
    );
  };

  useEffect(() => {
    const getCountries = async () => {
      await axios
        .get("https://seller-dev.api.maxsold.com/countries")
        .then((res) => {
          setCountries(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCountries();

    const getTerritories = async () => {
      await axios
        .get("https://seller-dev.api.maxsold.com/territories")
        .then((res) => {
          console.log(`res:${res}`);
          setStates(res.data);
          setTerritories(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getTerritories();
  }, []);

  const filterTeritories = (countryId) => {
    return state.filter((item) => item.countryId === countryId);
  };

  return (
    <Box
      sx={{
        width: "80%",
        margin: " 20px auto",
        marginTop: "15px",
        "& .MuiButtonBase-root": {
          marginBottom: "15px",
        },
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bolder" }}>
        Where are your items located?
      </Typography>
      {countries.map((country) => (
        <Button
          fullWidth
          variant={
            location.countryName === country.countryName
              ? "contained"
              : "outlined"
          }
          size="large"
          sx={{ p: 1.5 }}
          onClick={() => handleClick(country)}
        >
          {country.countryName}
        </Button>
      ))}
      {/* <Button
        fullWidth
        variant={isUsaClicked ? "contained" : "outlined"}
        size="large"
        sx={{ p: 1.5 }}
        onClick={usaHandleClick}
      >
        United States of America
      </Button> */}
      {isButtonClicked && (
        <Box fullWidth>
          <Typography
            variant="button"
            display="block"
            sx={{ margin: "10px 0px", fontWeight: "bolder" }}
          >
            Select your state
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select state</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedState}
              label="Select state"
              onChange={handleChange}
            >
              {}
              {state
                .filter((item) => item.countryId === location.countryId)
                .map(({ territoryName, territoryId }) => (
                  <MenuItem key={territoryId} value={territoryId}>
                    {territoryName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
      )}
      <Button
        onClick={selectedState !== null ? handleNext : null}
        // disabled={location === ""}
        variant="contained"
        sx={{
          width: "35%",
          margin: "30px 0px 10px 0px",
        }}
      >
        Next
      </Button>
    </Box>
  );
};

export default LocationForm;
