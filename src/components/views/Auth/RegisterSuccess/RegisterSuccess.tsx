import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';

function RegisterSuccess() {
  const router = useRouter();

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
          src="/images/illustration/email-send.svg"
          alt="success"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-danger-500">
          Create account successfully
        </h1>
        <p className="text-xl font-bold text-default-500">
          Check your email to activate your account
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

export default RegisterSuccess;
