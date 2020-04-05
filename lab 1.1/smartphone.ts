import{Mobile}from "./mobile";
export class SmartPhone extends Mobile{
    MobileType:string;
    constructor(mobileId:number,
        mobileName:string,
        mobileCost:number,MobileType:string)
        {
            super(mobileId,mobileName,mobileCost);
            this.MobileType=MobileType;
        }

        //first the display method of Mobile will be called then display of SmartPhone will bw called.
        display()
        {
            super.display();
            console.log("MobileType:"+this.MobileType);
        }
}