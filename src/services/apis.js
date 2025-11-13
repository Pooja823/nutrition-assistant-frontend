import axios from 'axios';

// Replace this with your deployed backend URL
const BASE_URL = 'https://nutrition-assistant-backend-production.up.railway.app/api'; 

export const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
  withCredentials: false, // set true if using cookies for auth
});

export const login = async ({ email, password }) => {
  return (await Axios.post('/auth/login', { email, password })).data;
};

export const userInfo = async () => {
  return (await Axios.get('/auth/me')).data;
};

export const signup = async ({ email, password, username }) => {
  return (await Axios.post('/auth/signup', { email, password, username })).data;
};

export const signInWithGoogle = async ({ accessToken }) => {
  return (await Axios.post('/auth/google-oauth', { accessToken })).data;
};

export const userAdditionInfo = async ({ height, weight, age, gender, activity }) => {
  return (
    await Axios.post('/auth/user-info', { height, weight, age, gender, activity })
  ).data;
};

export const captureFood = async ({ foodImage }) => {
  const form = new FormData();
  form.append('foodImage', foodImage);
  return (await Axios.post('/food/capture-food', form)).data;
};

export const foodNutritionDetails = async ({ food_item, image_url }) => {
  return (
    await Axios.post('/food/nutrition-details', { food_item, image_url })
  ).data;
};

export const intakeFood = async ({ consumed_food_id }) => {
  return (await Axios.post('/food/intake', { consumed_food_id })).data;
};

export const todaysConsumption = async () => {
  return (await Axios.get('/food/todays-consumption')).data;
};

export const lastWeekCalorieDetails = async () => {
  return (await Axios.get('/food/last-week-nutrition-details')).data;
};

export const consumptionOn = async (date) => {
  return (
    await Axios.post(
      '/food/consumption-on',
      { consumed_on: date },
      { timeout: 5000 }
    )
  ).data;
};

// Export all functions together for easy import
export const API = {
  login,
  userInfo,
  signup,
  signInWithGoogle,
  userAdditionInfo,
  captureFood,
  foodNutritionDetails,
  intakeFood,
  todaysConsumption,
  lastWeekCalorieDetails,
  consumptionOn,
};
