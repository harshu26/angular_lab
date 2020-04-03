export class Employee{
    empId:number;
    empName:string;
    empSalary:number;
    empDept:string;

    constructor(id:number, name:string, sal:number, dept:string){
        this.empId=id;
        this.empName=name;
        this.empSalary=sal;
        this.empDept=dept;
    }

}