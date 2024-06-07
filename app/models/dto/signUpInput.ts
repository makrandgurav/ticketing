import { IsEmail } from "class-validator";
import { LoginInput } from "./loginInput";

export class SignUpInput extends LoginInput {
    @IsEmail()
    email: string

    constructor(email: string, username: string, password: string) {
        super(username, password);
        this.email = email;
    }
}