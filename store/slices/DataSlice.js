import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    reasonToSell: 0,
    territoryId: 0,
    countryId: 0,
    countryName: "",
    territoryName: "",
  },
  reducers: {
    setData: (state, action) => {
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        reasonToSell,
        territoryId,
        countryId,
        countryName,
        territoryName,
      } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.phoneNumber = phoneNumber;
      state.reasonToSell = reasonToSell;
      state.territoryId = territoryId;
      state.countryId = countryId;
      state.countryName = countryName;
      state.territoryName = territoryName;
    },
  },
});
console.log(dataSlice.actions);
export const { setData } = dataSlice.actions;
export default dataSlice;
