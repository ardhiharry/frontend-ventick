import Image from 'next/image';
import Link from 'next/link';
import useRegister from './useRegister';
import { Button, Card, CardBody, Input, Spinner } from '@nextui-org/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { cn } from '@/utils/cn';
import { Controller } from 'react-hook-form';

function Register() {
  const {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    handleRegister,
    isPendingRegister,
    errors,
  } = useRegister();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/3">
        <Image
          src="/images/general/logo.svg"
          alt="logo"
          width={180}
          height={180}
        />
        <Image
          src="/images/illustration/login.svg"
          alt="logo"
          className="w-2/3 lg:w-full"
          width={1024}
          height={1024}
        />
      </div>
      <Card>
        <CardBody className="p-8">
          <h2 className="text-xl font-bold text-danger">Create Account</h2>
          <p className="mb-4 text-small">
            Have an account?&nbsp;
            <Link href="/auth/login" className="font-semibold text-danger-500">
              Login Here
            </Link>
          </p>
          {errors.root && (
            <p className="mb-2 font-medium text-danger">
              {errors?.root?.message}
            </p>
          )}
          <form
            className={cn(
              'flex w-80 flex-col',
              Object.keys(errors).length > 0 ? 'gap-2' : 'gap-4'
            )}
            onSubmit={handleSubmit(handleRegister)}
          >
            <Controller
              name="first_name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  isRequired
                  type="text"
                  label="First Name"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.first_name !== undefined}
                  errorMessage={errors.first_name?.message}
                />
              )}
            />
            <Controller
              name="last_name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  label="Last Name"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.last_name !== undefined}
                  errorMessage={errors.last_name?.message}
                  value={field.value ?? ''}
                  onChange={(e) =>
                    field.onChange(
                      e.target.value === '' ? null : e.target.value
                    )
                  }
                />
              )}
            />
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  isRequired
                  type="text"
                  label="Username"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.username !== undefined}
                  errorMessage={errors.username?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  isRequired
                  type="email"
                  label="Email"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.email !== undefined}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  isRequired
                  type={visiblePassword.password ? 'text' : 'password'}
                  label="Password"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.password !== undefined}
                  errorMessage={errors.password?.message}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() => handleVisiblePassword('password')}
                    >
                      {visiblePassword.password ? (
                        <FaEye className="pointer-events-none text-xl text-default-400" />
                      ) : (
                        <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                      )}
                    </button>
                  }
                />
              )}
            />
            <Controller
              name="confirm_password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  isRequired
                  type={visiblePassword.confirmPassword ? 'text' : 'password'}
                  label="Confirm Password"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.confirm_password !== undefined}
                  errorMessage={errors.confirm_password?.message}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() => handleVisiblePassword('confirmPassword')}
                    >
                      {visiblePassword.confirmPassword ? (
                        <FaEye className="pointer-events-none text-xl text-default-400" />
                      ) : (
                        <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                      )}
                    </button>
                  }
                />
              )}
            />
            <Button type="submit" color="danger" size="lg">
              {isPendingRegister ? (
                <Spinner color="white" size="sm" />
              ) : (
                'Register'
              )}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Register;
