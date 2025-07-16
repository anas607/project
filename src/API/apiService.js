import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const getToken = () => {
  return cookies.get("access_token");
};

export const postData = async (url, body = {}, customHeaders = {}) => {
  const token = getToken();

  const headers = {
    "X-Use-Cookie": "false",
    Authorization: token ? `Bearer ${token}` : "",
    ...customHeaders,
  };

  try {
    const response = await axios.post(url, body, { headers });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// تابع GET عام
export const getData = async (url, customHeaders = {}) => {
  const token = getToken();

  const headers = {
    Authorization: token ? `Bearer ${token}` : "",
    ...customHeaders,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
