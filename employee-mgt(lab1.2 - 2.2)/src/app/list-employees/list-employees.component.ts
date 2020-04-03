import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employeeservice';

@Component({
  selector: 'list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[]=[];

  service:EmployeeService;

  orderByField:string=null;

  constructor(service:EmployeeService) {
  this.service=service;
  this.employees=this.service.fetchAllEmployees();
  }

  ngOnInit(): void {
  }
 
  orderBy(field:string){
    this.orderByField=field;     
  }

  removeEmployeeById(id:number){
   this.service.removeEmployeeById(id);
  }
  
  updatedEmp:Employee=null;
  updateEmployee(form:any){
    let details=form.value;
    let id=details.id;
    let name=details.name;
    let salary=details.salary;
    let department=details.department;
    let emp=new Employee(id,name,salary,department);
    this.service.updateEmployee(emp);
    this.updatedEmp=emp;
    form.reset();
  }

}
