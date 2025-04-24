import AuthLayout from '@/components/layouts/AuthLayout';
import Register from '@/components/views/Auth/Register';

function RegisterPage() {
  return (
    <AuthLayout title="Ventick | Register">
      <Register />
    </AuthLayout>
  );
}

export default RegisterPage;
