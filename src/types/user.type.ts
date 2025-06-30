export interface SessionPayload {
  phoneNumber: string;
}

export interface LoginCredentials {
  phoneNumber: string;
  password: string;
}

export type UserRegistrationData = LoginCredentials;
