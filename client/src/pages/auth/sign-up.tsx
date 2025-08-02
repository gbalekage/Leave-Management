import AdminLayout from "@/components/admin/layout";
import { SignUpForm } from "@/components/auth/signUp-Form";

const SignUpPage = () => {
  return (
    <AdminLayout>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <SignUpForm />
        </div>
      </div>
    </AdminLayout>
  );
};

export default SignUpPage;
