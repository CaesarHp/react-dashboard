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
    todoList: [
      { id: 1, info: "Abs and core training 20 min", completed: false },
      { id: 2, info: "Legs training 25 min", completed: false },
      { id: 3, info: "Whole body cardio 10 min", completed: false },
    ],
  },
  reducers: {
    setBasicData(state, action) {
      state.basicData = action.payload;
    },

    setCaloriesData(state, action) {
      state.caloriesData = action.payload;
    },

    setTodoList(state, action) {
      const newTodo = {
        id: Date.now(),
        info: action.payload,
        completed: false,
      };

      state.todoList.unshift(newTodo);
    },

    toggleCompleteTodo(state, action) {
      const index = state.todoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todoList[index].completed = action.payload.completed;
    },

    removeTodo(state, action) {
      const newList = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
      state.todoList = newList;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
