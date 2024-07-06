import AddressEntity from "../database/entities/AddressEntity";
import Address from "./Address";
type User = {
    firstName: string;
    lastName: string;
    email: string;
    document: string;
    password: string;
    birthdate: Date;
    address?: Address | AddressEntity | number | null;
};
export default User;
