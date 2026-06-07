export interface ILoginPayload {
  email: string;
  password: string;
  remember: boolean;
}

export interface IRequestRegisterPayload
  extends Omit<ILoginPayload, "remember"> {
  name: string;
}
