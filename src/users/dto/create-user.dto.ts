import { 
    IsBoolean,
    IsEmail, 
    IsNotEmpty, 
    IsNumber, 
    IsString,
    MinLength} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string
    
    @IsString()
    telephone: string;
    
    @IsString()
    road: string;
    
    @IsString()
    neighborhood: string;
    
    @IsString()
    city: string;

    @IsNumber()
    number: number;
    
    @IsString()
    complement: string;
    
    @IsNumber()
    zip_code: number;
    
    @IsBoolean()
    is_admin: boolean;
}
