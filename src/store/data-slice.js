import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    basicData: {
      sleepGoal: 7,
      sleepToday: 8,
      stepsGoal: 3000,
      stepsToday: 5500,
      heartRate: 80,
    },
    caloriesData: {
      morningBurn: 500,
      morningEarn: 620,
      noonBurn: 750,
      noonEarn: 1000,
      afternoonBurn: 1200,
      afternoonEarn: 730,
      nightBurn: 220,
      nightEarn: 150,
    },
  },
  reducers: {
    setBasicData(state, action) {
      state.basicData = action.payload;
    },

    setCaloriesData(state, action) {
      state.caloriesData = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
