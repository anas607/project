import axios from "axios";

axios.defaults.withCredentials = true;

// // Helper function لتحضير الهيدرز
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

// // دالة GET
export const getData = async (url, customHeaders = {}) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "X-Use-Cookie": "true",
        ...customHeaders,
      },
      withCredentials: true, // مهم جداً لإرسال HttpOnly cookie تلقائياً
    });
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("AXIOS GET ERROR:", error);
    throw error.response ? error.response.data : error;
  }
};



// // دالة POST
export const postData = async (url, body = {}, customHeaders = {}, isFormData = false) => {
  try {
   const response = await axios.post(url, body, {
  headers: {
    "Content-Type": isFormData ? "multipart/form-data" : "application/json",
    "X-Use-Cookie": "true",
    ...customHeaders,
  },
  withCredentials: true,
});

        console.log(response)

    return response.data;
  } catch (error) {
    console.error("AXIOS POST ERROR:", error);
    throw error.response ? error.response.data : error;
  }
};

// // دالة PUT
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

// // دالة PATCH
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
/////////lokal
// import axios from "axios";
// import Cookies from "universal-cookie";

// const cookies = new Cookies();

// const getToken = () => {
//   return cookies.get("access_token");
// };

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

///////////////////////////lokal

// تابع GET عام
// export const getData = async (url, customHeaders = {}) => {
//   const token = getToken();

//   const headers = {
//     Authorization: token ? `Bearer ${token}` : "",
//     ...customHeaders,
//   };

//   try {
//     const response = await axios.get(url, { headers });
//     return response.data;
//   } catch (error) {
//      console.error("AXIOS ERROR:", error); 
//     throw error.response ? error.response.data : error;
//   }
// };

// export const postData = async (
//   url,
//   body = {},
//   customHeaders = {},
//   isFormData = false
 
// ) => {
//   const token = getToken();

//   const headers = {
//     "X-Use-Cookie": "false",
//     Authorization: token ? `Bearer ${token}` : "",
//     ...customHeaders,
//   };

//   // لا تضف Content-Type إذا كانت FormData (سيُضاف تلقائيًا من المتصفح)
//   if (isFormData) {
//     delete headers["Content-Type"];
//   }

//   try {
//     const response = await axios.post(url, body, {
//       headers,
//     });
//     return response.data;
//   } catch (error) {
//     //  console.error("AXIOS ERROR:", error); 
//     throw error.response ? error.response.data : error;
//   }
// };
// export const putData = async (url, body = {}, customHeaders = {}, isFormData = false) => {
//   const token = getToken();

//   const headers = {
//     "X-Use-Cookie": "false",
//     Authorization: token ? `Bearer ${token}` : "",
//     ...customHeaders,
//   };

//   if (isFormData) {
//     delete headers["Content-Type"];
//   }

//   try {
//     const response = await axios.put(url, body, { headers });
//     return response.data;
//   } catch (error) {
//     throw error.response ? error.response.data : error;
//   }
// };
// export const patchData = async (
//   url,
//   body = {},
//   customHeaders = {},
//   isFormData = false
// ) => {
//   const token = getToken();

//   const headers = {
//     "X-Use-Cookie": "false",
//     Authorization: token ? `Bearer ${token}` : "",
//     ...customHeaders,
//   };

//   // لا تضف Content-Type إذا كانت FormData
//   if (isFormData) {
//     delete headers["Content-Type"];
//   }

//   try {
//     const response = await axios.patch(url, body, {
//       headers,
//     });
//     return response.data;
//   } catch (error) {
//     // console.error("AXIOS ERROR:", error);
//     throw error.response ? error.response.data : error;
//   }
// };

