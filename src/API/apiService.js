import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const getToken = () => {
  return cookies.get("access_token");
};

// export const postData = async (url, body = {}, customHeaders = {}) => {
//   const token = getToken();

//   const headers = {
//     "X-Use-Cookie": "false",
//     Authorization: token ? `Bearer ${token}` : "",
//     ...customHeaders,
//   };

//   try {
//     const response = await axios.post(url, body, { headers });
//     return response.data;
//   } catch (error) {
//     throw error.response ? error.response.data : error;
//   }
// };

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
     console.error("AXIOS ERROR:", error); 
    throw error.response ? error.response.data : error;
  }
};

export const postData = async (
  url,
  body = {},
  customHeaders = {},
  isFormData = false
 
) => {
  const token = getToken();

  const headers = {
    "X-Use-Cookie": "false",
    Authorization: token ? `Bearer ${token}` : "",
    ...customHeaders,
  };

  // لا تضف Content-Type إذا كانت FormData (سيُضاف تلقائيًا من المتصفح)
  if (isFormData) {
    delete headers["Content-Type"];
  }

  try {
    const response = await axios.post(url, body, {
      headers,
    });
    return response.data;
  } catch (error) {
    //  console.error("AXIOS ERROR:", error); 
    throw error.response ? error.response.data : error;
  }
};
export const putData = async (url, body = {}, customHeaders = {}, isFormData = false) => {
  const token = getToken();

  const headers = {
    "X-Use-Cookie": "false",
    Authorization: token ? `Bearer ${token}` : "",
    ...customHeaders,
  };

  if (isFormData) {
    delete headers["Content-Type"];
  }

  try {
    const response = await axios.put(url, body, { headers });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
