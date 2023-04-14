export interface IAuthContextValue {
  token: string;
  setToken: (newValue: string) => void;
}

export interface ICredentials {
  name: string;
  password: string;
}

export interface ILoginSuccessData {
  token: string;
}

export interface IAuth {
  token: string;
  logout: () => void;
}

export interface ILogin {
  error: string;
  isLoading: boolean;
  login: (credentials: ICredentials) => void;
}
