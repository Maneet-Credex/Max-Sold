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
  StyledLink,
  FormHelperText,
} from "@mui/material";
import styled from "@emotion/styled";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import AppContext from "./AppContext";
import { setData } from "@/store/slices/DataSlice";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .test("email", "Email is already registered", async function (value) {
      const res = await axios.post(
        "https://seller-dev.api.maxsold.com/check-email",
        { email: value }
      );
      console.log(res);
      if (!res.data.data) {
        return true;
      }
      return false;
    }),
  phoneNumber: Yup.string()
    .min(10, "Phone number must be at least 10 characters")
    .max(10, "Phone number must be at most 10 characters")
    .required("Phone is Required"),
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Late Name is Required"),
  select: Yup.string().required("Option is Required"),
});
const DetailFormCard = ({ handleNext }) => {
  const [reasons, setReasons] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const ctx = useContext(AppContext);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getReasons() {
      const res = await axios.get(
        "https://seller-dev.api.maxsold.com/selling-reasons"
      );
      setReasons(res.data);
    }
    getReasons();
  }, []);

  async function checkEmail({ email }) {
    const res = await axios.post(
      "https://seller-dev.api.maxsold.com/check-email",
      { email }
    );
    console.log(res);
    return res.data.data;
  }

  const StyledLink = styled("a")({
    color: "blue",
    "&:hover": {
      color: "red",
    },
  });
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    dispatch(
      setData({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        reasonToSell: parseInt(data.select),
      })
    );
    ctx.setData({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      reasonToSell: parseInt(data.select),
    });
    if (checkEmail(data.email)) handleNext();
    else errors;
  };
  return (
    <Box
      sx={{
        marginTop: "20px",
        "& .MuiTextField-root": {
          marginBottom: "15px",
        },
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          variant="outlined"
          label="First Name"
          error={errors.firstName && errors.firstName.message}
          helperText={errors.firstName && errors.firstName.message}
          inputProps={{
            onBlur: handleSubmit(onSubmit),
            ...register("firstName", { required: true }),
          }}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          variant="outlined"
          label="Last Name"
          error={errors.lastName && errors.lastName.message}
          helperText={errors.lastName && errors.lastName.message}
          inputProps={{
            onBlur: handleSubmit(onSubmit),
            ...register("lastName", { required: true }),
          }}
        />
        <TextField
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          variant="outlined"
          label="Phone Number"
          error={errors.phoneNumber && errors.phoneNumber.message}
          helperText={errors.phoneNumber && errors.phoneNumber.message}
          inputProps={{
            onBlur: handleSubmit(onSubmit),
            ...register("phoneNumber", { required: true }),
          }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          inputProps={register("email")}
          onBlur={handleSubmit(onSubmit)}
        />
        <Typography
          variant="body1"
          sx={{ marginBottom: "15px", fontWeight: "lighter" }}
        >
          I'm looking to <strong>SELL</strong> my items to...
        </Typography>
        <FormControl
          variant="outlined"
          sx={{ width: "100%", marginBottom: "30px" }}
          error={errors.select ? true : false}
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Select an option
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            name="select"
            label="Select an option"
            onBlur={handleSubmit(onSubmit)}
            defaultValue=""
            {...register("select", { required: true })}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {reasons.map(({ reason, reasonId }) => (
              <MenuItem key={reasonId} value={reasonId}>
                {reason}
              </MenuItem>
            ))}
          </Select>

          {errors.select && (
            <FormHelperText>{errors.select.message}</FormHelperText>
          )}
        </FormControl>
        <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
        <Button
          variant="contained"
          type="submit"
          sx={{ width: "35%", margin: "30px 0px 10px 0px" }}
        >
          Next
        </Button>
        <Typography variant="subtitle2" component="body">
          By clicking next you agree to MaxSold's{" "}
          <StyledLink href="#">Terms and Conditions</StyledLink> and{" "}
          <StyledLink href="#">Privacy Notice</StyledLink>
        </Typography>
      </form>
    </Box>
  );
};
export default DetailFormCard;
