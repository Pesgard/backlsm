import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class LoginUSerDto{

    @IsString()
    @IsEmail()
    email:string;

    @IsString()
    @MinLength(3)
    @MaxLength(50)
    password: string;

}