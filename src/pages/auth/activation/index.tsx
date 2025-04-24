import AuthLayout from '@/components/layouts/AuthLayout';
import Activation from '@/components/views/Auth/Activation';
import authServices from '@/services/auth.service';

interface PropTypes {
  status: 'success' | 'failed';
}

function ActivationPage(props: PropTypes) {
  return (
    <AuthLayout title="Ventick | Activation">
      <Activation {...props} />
    </AuthLayout>
  );
}

export async function getServerSideProps(context: { query: { code: string } }) {
  try {
    const result = await authServices.activation({ code: context.query.code });
    const data = result.data.data;

    if (Array.isArray(data) && data.length > 0 && data[0] !== null) {
      return {
        props: {
          status: 'success',
        },
      };
    } else {
      return {
        props: {
          status: 'failed',
        },
      };
    }
  } catch (err) {
    return {
      props: {
        status: 'failed',
      },
    };
  }
}

export default ActivationPage;
