import { Length } from "class-validator";

export class LoginInput {
    username: string;
    @Length(5,8)
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}