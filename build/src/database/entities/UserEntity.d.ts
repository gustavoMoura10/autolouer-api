import AddressEntity from "./AddressEntity";
export default class UserEntity {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    birthdate: Date;
    document: string;
    address?: AddressEntity;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    constructor(firstName: string, lastName: string, email: string, document: string, birthdate: Date, password?: string, address?: AddressEntity);
}
