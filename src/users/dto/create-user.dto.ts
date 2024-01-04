import { 
    IsBoolean,
    IsEmail, 
    IsNotEmpty, 
    IsNumber, 
    IsString} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    email: string;
    
    @IsNumber()
    telephone: number;
    
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
