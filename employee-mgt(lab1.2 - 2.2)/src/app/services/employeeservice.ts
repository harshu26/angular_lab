import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { browser } from 'protractor';

@Injectable()
export class EmployeeService{

//Array of employee is created and intialized.
  store=[
   new Employee(1001,'Rahul',5000,'java'),
   new Employee(1002,'Sachin',19000,'oraApps')
];   
 
//used to add employee to the array.
  addEmployee(emp:Employee):void{
   this.store.push(emp);
  }

  //used to remove employee based on id.
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

  //will return all the employees present in the array.
  fetchAllEmployees(): Employee[]{
      return this.store;
  }

  //used to update employee details when passed employee id and existing employee id are same.
  updateEmployee(emp:Employee){
    for (let i = 0; i < this.store.length; i++) {
        if(this.store[i].empId == emp.empId){
          this.store[i] = emp;
        }
        
         
      }
  }


}