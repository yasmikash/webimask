import axios from "axios";

const instance = axios.create({
  baseURL: "http://imask.southeastasia.cloudapp.azure.com:5005",
});

export const userLogin = async (data) => {
  const result = await instance.post("/users/signIn", data);
  if (result.data.token) {
    localStorage.setItem("token", result.data.token);
  }
};

export const fetchAllHistory = async (data) => {
  const token = localStorage.getItem("token");

  const result = await instance.post(
    "/history/all",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return result.data;
};

export const fetchTemperatureHistory = async () => {
  const token = localStorage.getItem("token");

  const result = await instance.post(
    "/history/temperature",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return result.data;
};

export const fetchSpo2History = async () => {
  const token = localStorage.getItem("token");

  const result = await instance.post(
    "/history/spo2",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return result.data;
};

export const fetchCoughHistory = async () => {
  const token = localStorage.getItem("token");

  const result = await instance.post(
    "/history/cough",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return result.data;
};

export const fetchHeartRateHistory = async () => {
  const token = localStorage.getItem("token");

  const result = await instance.post(
    "/history/heartrate",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return result.data;
};

export const fetchRespiratoryHistory = async () => {
  const token = localStorage.getItem("token");

  const result = await instance.post(
    "/history/respiratory",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return result.data;
};
