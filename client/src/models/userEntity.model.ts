import { Address } from "./address.model";
import { Message } from "./message.model";

export class UserEntity{
    id?: any;
    email?:string;
    password?:string;
    isActive?:boolean;
    role?:Role;
    address?:Address;
    message?:Message;
    constructor(id?: any, email?: string, password?: string, isActive?: boolean,  address?: Address, message?: Message) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.isActive = isActive;
        this.address = address;
        this.message = message;
      
    }

}