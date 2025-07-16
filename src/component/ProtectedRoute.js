import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export default function ProtectedRoute() {
  const token = cookies.get("access_token");

  // إذا ما فيه توكين => رجّع المستخدم للوغ ان
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // إذا فيه توكين => اعرض الصفحة
  return <Outlet />;
}
