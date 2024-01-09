import { IsEmail, IsString, MinLength } from "class-validator";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class AuthRegisterDTO extends CreateUserDto{}