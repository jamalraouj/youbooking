import { Hotel } from "./hotel.model";
import { Message } from "./message.model";

export  class Announcement{
    id?:any;
    ref?:string;
    localDate?:string;
    is_accept?:boolean;
    hotel?:Hotel;
    message?:Message;
}