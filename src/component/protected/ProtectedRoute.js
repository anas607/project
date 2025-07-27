import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { setUserData, clearUserData } from "../../reducer/user";
import Loading from "../../wrong/mails/loading";
import FORBIDDIN from "./forbiden";
import APPLoading from "../../wrong/apploading";
import { BaseUrl, CHECK_SESSION } from "../../API/api";
import { getData } from "../../API/apiService";

const cookies = new Cookies();

export default function ProtectedRoute({ allowedRole }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const roles = useSelector((state) => state.user?.roles || []);
  // useEffect(() => {
  //   const token = cookies.get("access_token");

  //   if (!token) {
  //     setAuthorized(false);
  //     setLoading(false);
  //     return;
  //   }

  //   axios
  //     .get(`${BaseUrl}${CHECK_SESSION}`, {
  //       headers: {
  //         Authorization: ` Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       dispatch(
  //         setUserData({
  //           user: res.data.user,
  //           roles: res.data.user.roles || [],
  //         })
  //       );
  //       console.log(res.data);
  //       setAuthorized(true);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       cookies.remove("access_token");
  //       dispatch(clearUserData());
  //       setAuthorized(false);
  //       setLoading(false);
  //     });
  // }, [dispatch]);


//////////////////////////
// جديدة
useEffect(() => {
  const checkSession = async () => {
    try {
      const data = await getData(`${BaseUrl}${CHECK_SESSION}`);
            console.log("RESPONSE:", data);

      dispatch(
        setUserData({
          user: data.user,
          roles: data.user.roles || [],
        })
      );
      console.log("Allowed:", allowedRole);
console.log("User roles:", roles);

     // console.log(data);
      setAuthorized(true);
    } catch (err) {
      console.log(err)
      cookies.remove("access_token");
      dispatch(clearUserData());
      setAuthorized(false);
    } finally {
      setLoading(false);
    }
  };

  checkSession();
}, [dispatch]);

  if (loading) return <APPLoading />;
  if (!authorized) return <Navigate to="/login" replace />;
  if (allowedRole && ![].concat(allowedRole).some((r) => roles.includes(r))) {
    return <FORBIDDIN />;
  }
  return <Outlet />;
}
