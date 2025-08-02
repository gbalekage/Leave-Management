import { Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";

import SignPage from "./pages/auth/sign-in";
import SignUpPage from "./pages/auth/sign-up";
import VeryfyEmail from "./pages/auth/verifiy-email";
import { Toaster } from "sonner";
import AdminDashboard from "./pages/dashboard/admin/dashbaord";
import EmployeeDashboard from "./pages/dashboard/employe/dashbaord";
import ManagerDashboard from "./pages/dashboard/manager/dashbaord";
import ForgotPassword from "./pages/auth/forgot-password";
import ResetPassword from "./pages/auth/reset-password";
// import { Loader } from "lucide-react";
import UsersList from "./pages/dashboard/admin/users";
import AllLeaves from "./pages/dashboard/admin/leaves";
import ApprouvedLeaves from "./pages/dashboard/admin/approuved";
import RejectedLeaves from "./pages/dashboard/admin/rejected";

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen gap-2 animate-pulse">
  //       <Loader className="animate-spin" />
  //     </div>
  //   );
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<SignPage />} />
        <Route path="/admin/dashboard/sign-up" element={<SignUpPage />} />
        <Route path="/verify-email" element={<VeryfyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Dashboard Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/admin/dashboard/all-users" element={<UsersList />} />
        <Route path="/admin/dashboard/all-leaves" element={<AllLeaves />} />
        <Route path="/admin/dashboard/aprouved-leaves" element={<ApprouvedLeaves />} />
        <Route path="/admin/dashboard/rejected-leaves" element={<RejectedLeaves />} />
      </Routes>

      <Toaster />
    </>
  );
};

export default App;
