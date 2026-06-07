import type { ILoginPayload, IRequestRegisterPayload } from "../types/auth";
import type { TypeResponse } from "../types/response";
import type { IUser } from "../types/user";
import api from "../utils/api";

export const loginApi = async (
  payload: ILoginPayload,
): Promise<
  TypeResponse<
    IUser & {
      accessToken: string;
    }
  >
> => {
  const { data } = await api.post("/auth/login", payload);
  return data;
};

export const requestRegisterApi = async (
  payload: IRequestRegisterPayload,
): Promise<TypeResponse<any>> => {
  const { data } = await api.post("/auth/request-register", payload);
  return data;
};
