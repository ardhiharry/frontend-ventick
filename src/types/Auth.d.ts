interface IRegister {
  first_name: string;
  last_name?: string | null;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export type { IRegister };
