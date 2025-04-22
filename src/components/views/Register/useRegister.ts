import authServices from '@/services/auth';
import registerSchema from '@/utils/validation/register.validation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IRegister } from '@/types/Auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

function useRegister() {
  const router = useRouter();

  const [visiblePassword, setVisiblePassword] = useState({
    password: false,
    confirmPassword: false,
  });

  function handleVisiblePassword(key: 'password' | 'confirmPassword') {
    setVisiblePassword({
      ...visiblePassword,
      [key]: !visiblePassword[key],
    });
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<IRegister>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      last_name: null,
    },
  });

  const registerService = async (payload: IRegister) => {
    return await authServices.register(payload);
  };

  const { mutate: mutateRegister, isPending: isPendingRegister } = useMutation({
    mutationFn: registerService,
    onError(err) {
      setError('root', {
        message: err.message,
      });
    },
    onSuccess: () => {
      router.push('/auth/register/success');
      reset();
    },
  });

  const handleRegister = (data: IRegister) => mutateRegister(data);

  return {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    handleRegister,
    isPendingRegister,
    errors,
  };
}

export default useRegister;
