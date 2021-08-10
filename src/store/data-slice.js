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
    userInfo: {
      name: "Amanda Smith",
      job: "Web Developer",
      weight: 55,
      height: 165,
      age: 25,
      icon: "female",
    },

    monthlyProgress: {
      monthTotalTodo: 100,
      monthFinishedTodo: 75,
    },
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

      state.monthlyProgress.monthTotalTodo++;
    },

    toggleCompleteTodo(state, action) {
      const index = state.todoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todoList[index].completed = action.payload.completed;

      if (action.payload.completed) {
        state.monthlyProgress.monthFinishedTodo++;
      } else {
        state.monthlyProgress.monthFinishedTodo--;
      }
    },

    removeTodo(state, action) {
      const newList = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
      state.todoList = newList;

      state.monthlyProgress.monthTotalTodo--;
    },

    editTodo(state, action) {
      const index = state.todoList.findIndex(
        (item) => item.id === action.payload.id
      );

      state.todoList[index].info = action.payload.info;
    },

    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
