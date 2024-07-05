export default class UserEntity {
    private id;
    private firstName;
    private lastName;
    private email;
    private password?;
    private birthdate;
    private document;
    private createdAt;
    private updatedAt;
    private deletedAt;
    constructor(firstName: string, lastName: string, email: string, document: string, password: string, birthdate: Date);
}
