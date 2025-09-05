// ConnectionListener.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOffline, setOnline } from "../../reducer/network/connectionSlice";

export default function ConnectionListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleOnline = () => dispatch(setOnline());
    const handleOffline = () => dispatch(setOffline());

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [dispatch]);

  return null; // ما بيعرض شي
}
