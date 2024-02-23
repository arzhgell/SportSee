import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}/user/`,
  timeout: 1000,
  headers: {},
});

export async function getUser(userId: number) {
  const response = await api.get(`${userId}`);
  return response;
}

export async function getUserActivity(userId: number) {
  const response = await api.get(`${userId}/activity`);
  return response;
}

export async function getUserAverageSession(userId: number) {
  const response = await api.get(`${userId}/average-sessions`);
  return response;
}
export async function getUserPerformance(userId: number) {
  const response = await api.get(`${userId}/performance`);
  return response;
}
