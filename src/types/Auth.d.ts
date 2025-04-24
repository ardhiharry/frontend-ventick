interface IRegister {
  first_name: string;
  last_name?: string | null;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface IActivation {
  code: string;
}

export type { IRegister, IActivation };
