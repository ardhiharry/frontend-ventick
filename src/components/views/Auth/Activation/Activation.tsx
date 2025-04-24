import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface PropTypes {
  status: 'success' | 'failed';
}

function Activation(props: PropTypes) {
  const router = useRouter();
  const { status } = props;

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-10 p-4">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image
          src="/images/general/logo.svg"
          alt="logo"
          width={180}
          height={180}
        />
        <Image
          src={
            status === 'success'
              ? '/images/illustration/success.svg'
              : '/images/illustration/pending.svg'
          }
          alt={status === 'success' ? 'success' : 'pending'}
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-danger-500">
          {status === 'success' ? 'Activation Success' : 'Activation Failed'}
        </h1>
        <p className="text-xl font-bold text-default-500">
          {status === 'success'
            ? 'Thank you for your registration'
            : 'Activation code is invalid, please try again'}
        </p>
        <Button
          className="mt-4 w-fit transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
          variant="ghost"
          color="danger"
          onClick={() => router.push('/')}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}

export default Activation;
