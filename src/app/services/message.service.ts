import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages:{message:string}[] =[];

  constructor() {
    this.messages.push({message:"ENFIN"})
    this.messages.push({message:"UN"})
    this.messages.push({message:"message"})
  }
  log(message:string){
    this.messages.push({message:message});
  }
  clear(){
    this.messages=[];
  }
}
