export interface IUser {
  _id: string;
  name: string;
  email: string;
  isActive: boolean;
  role: "user" | "staff" | "admin";
  createdAt: string;
  updatedAt: string;
}
