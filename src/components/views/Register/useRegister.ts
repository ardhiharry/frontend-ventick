import { useState } from 'react';

function useRegister() {
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

  return { visiblePassword, handleVisiblePassword };
}

export default useRegister;
