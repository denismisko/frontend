import { Injectable } from '@angular/core';
import { Tasks } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: Tasks[] = [
    {
      title:"Create Login",
      description:"Tento task je len testovací", 
      priority:"1", 
      class:"3.N",
      lesson:"Pro",
      status:"TODO",
      deadline:"13.06.2023"
    },
    {
      title:"Create Login",
      description:"Tento task je len testovací", 
      priority:"2", 
      class:"2.N",
      lesson:"Pro",
      status:"TODO",
      deadline:"13.06.2023"
    },
    {
      title:"Create Login",
      description:"Tento task je len testovací", 
      priority:"2", 
      class:"1.N",
      lesson:"Pro",
      status:"TODO",
      deadline:"13.06.2023"
    },
    {
      title:"Create Login",
      description:"Tento task je len testovací", 
      priority:"2", 
      class:"3.N",
      lesson:"Pro",
      status:"TODO",
      deadline:"13.06.2023"
    },
    {
      title:"Create Login",
      description:"Tento task je len testovací", 
      priority:"3", 
      class:"1.N",
      lesson:"Pro",
      status:"TODO",
      deadline:"13.06.2023"
    },
    {
      title:"Create Login",
      description:"Tento task je len testovací", 
      priority:"3", 
      class:"1.N",
      lesson:"Pro",
      status:"TODO",
      deadline:"13.06.2023"
    },
   {
      title:"Create Login",
      description:"Tento task je len testovací", 
      priority:"3", 
      class:"1.N",
      lesson:"Pro",
      status:"TODO",
      deadline:"13.06.2023"
    },
    {
      title:"Create Login",
      description:"Tento task je len testovací", 
      priority:"3", 
      class:"1.N",
      lesson:"Pro",
      status:"TODO",
      deadline:"13.06.2023"
    },
  ];

  constructor() { }

  getTasks(): Tasks[]{
    return this.tasks;
  }
}
