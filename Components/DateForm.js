import React, { useState, useContext } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import axios from "axios";
import AppContext from "./AppContext";
import { useSelector } from "react-redux";

const schema = yup.object().shape({
  date: yup
    .date()
    .nullable()
    .required("Please select a date")
    .min(new Date(), "Please select a future date"),
});

const DateForm = ({ handleNext }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const ctx = useContext(AppContext);
  const formData = useSelector((state) => {
    return state.data;
  });
  console.log(formData);
  const onSubmit = (data) => {
    const selecteddate = data.date;
    ctx.setData({
      ...ctx.data,
      soldBy: dayjs(selecteddate).format("YYYY-MM-DD"),
    });
    axios
      .post("https://seller-dev.api.maxsold.com/registration", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        // Handle successful response here...
      })
      .catch((error) => {
        console.error(error);
        // Handle error here...
      });
    handleNext();
  };

  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        marginTop: "15px",
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bolder" }}>
        When do you need everything sold by?
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: "20px" }}>
        To best support you, please provide the last safe date for your auction
        pickup event to be completed. If no timeline constraint exists, a best
        guess will suffice. We acknowledge this date may change depending on
        your individual circumstances.
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          control={control}
          name="date"
          defaultValue={null}
          render={({ field }) => (
            <DatePicker
              {...field}
              sx={{ width: "100%" }}
              label="Select a date"
              renderInput={(params) => (
                <TextField {...params} error={!!errors.date} />
              )}
              value={
                field.value ? dayjs(field.value).format("YYYY-MM-DD") : null
              }
              onChange={(newValue) => {
                field.onChange(newValue);
                setSelectedDate(newValue);
              }}
            />
          )}
        />
        {errors.date && (
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: "20px", color: "red" }}
          >
            {errors.date.message}
          </Typography>
        )}
      </LocalizationProvider>
      <Button
        onClick={handleSubmit(onSubmit)}
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

export default DateForm;
