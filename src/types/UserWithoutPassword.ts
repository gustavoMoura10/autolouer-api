import User from "./User";

type UserWithoutPassword = Omit<User, "password">;

export default UserWithoutPassword;
