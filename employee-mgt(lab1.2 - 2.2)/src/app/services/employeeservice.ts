import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { browser } from 'protractor';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(1001,'Rahul',5000,'java'),
   new Employee(1002,'Sachin',19000,'oraApps')
];   
 
  addEmployee(emp:Employee):void{
   this.store.push(emp);
  }

  removeEmployeeById(id:number){
    let foundIndex=-1;
    for(let i=0;i<this.store.length;i++){
      let emp=this.store[i];
      if(emp.empId===id){
        foundIndex=i;
        break;
      }
    }
    if(foundIndex<0){
      return;
    }
    this.store.splice(foundIndex,1);

  }

  fetchAllEmployees(): Employee[]{
      return this.store;
  }

  updateEmployee(emp:Employee){
    for (let i = 0; i < this.store.length; i++) {
        if(this.store[i].empId == emp.empId){
          this.store[i] = emp;
        }
        
         
      }
  }


}