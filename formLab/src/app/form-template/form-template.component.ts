import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  constructor() { }

  productId="";
  productName="";
  productCost=""; 
  productOnline="";
  productAvail="";
  productCategory="";
  ngOnInit(): void {
  }

  addProduct(myForm){
    console.log("Id:"+myForm.value.productId+" "+"Name:"+myForm.value.productName+" "+"Cost:"+myForm.value.productCost
    +" "+"Online:"+myForm.value.productOnline+" "+"Availability:"+myForm.value.productAvail+" "+"Category:"+myForm.value.productCategory);
    this.productId=myForm.value.productId;
    this.productName=myForm.value.productName;
    this.productCost=myForm.value.productCost;
    this.productOnline=myForm.value.productOnline;
    this.productAvail=myForm.value.productAvail;
    this.productCategory=myForm.value.productCategory;    
  }

}
