import UserEntity from "../../database/entities/UserEntity";
import Address from "../../types/Address";
import User from "../../types/User";

export default interface InterfaceUserRepository {
  createUser(user: User): Promise<UserEntity | null> | UserEntity;
  findUserById(id: number): Promise<UserEntity | null> | UserEntity;
  findAllUsers(): Promise<UserEntity[]> | UserEntity[];
  findUserByEmail(email: string): Promise<UserEntity | null> | UserEntity;
  updateUserById(
    id: number,
    user: User
  ): Promise<UserEntity | null> | UserEntity;
  deleteUserById(id: number): Promise<UserEntity | null> | UserEntity;
}
