import axios from "axios";

axios.defaults.withCredentials = true;

// Helper function لتحضير الهيدرز
const prepareHeaders = (customHeaders = {}, isFormData = false) => {
  const headers = {
    "X-Use-Cookie": "true", // الخبر الباك إنه يعتمد الكوكي
    ...customHeaders,
  };

  if (isFormData) {
    delete headers["Content-Type"]; // المتصفح يحدد Content-Type تلقائي للـ FormData
  }

  return headers;
};

// دالة GET
export const getData = async (url, customHeaders = {}) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "X-Use-Cookie": "true",
        ...customHeaders,
      },
      withCredentials: true, // مهم جداً لإرسال HttpOnly cookie تلقائياً
    });
    return response.data;
  } catch (error) {
    console.error("AXIOS GET ERROR:", error);
    throw error.response ? error.response.data : error;
  }
};



// دالة POST
export const postData = async (url, body = {}, customHeaders = {}, isFormData = false) => {
  try {
    const response = await axios.post(url, body, {
  headers: {
        "X-Use-Cookie": "true",
        ...customHeaders,
      },      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("AXIOS POST ERROR:", error);
    throw error.response ? error.response.data : error;
  }
};

// دالة PUT
export const putData = async (url, body = {}, customHeaders = {}, isFormData = false) => {
  try {
    const response = await axios.put(url, body, {
      headers: prepareHeaders(customHeaders, isFormData),
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("AXIOS PUT ERROR:", error);
    throw error.response ? error.response.data : error;
  }
};

// دالة PATCH
export const patchData = async (url, body = {}, customHeaders = {}, isFormData = false) => {
  try {
    const response = await axios.patch(url, body, {
      headers: prepareHeaders(customHeaders, isFormData),
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("AXIOS PATCH ERROR:", error);
    throw error.response ? error.response.data : error;
  }
};
