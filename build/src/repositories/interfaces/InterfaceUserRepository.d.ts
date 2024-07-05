import UserEntity from "../../database/entities/UserEntity";
export default interface InterfaceUserRepository {
    createUser(user: UserEntity): Promise<UserEntity | null> | UserEntity;
    findUserById(id: number): Promise<UserEntity | null> | UserEntity;
    findAllUsers(): Promise<UserEntity[]> | UserEntity[];
    findUserByEmail(email: string): Promise<UserEntity | null> | UserEntity;
    updateUserById(id: number, user: UserEntity): Promise<UserEntity | null> | UserEntity;
    deleteUserById(id: number): Promise<UserEntity | null> | UserEntity;
}
