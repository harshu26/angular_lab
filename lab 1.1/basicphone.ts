import{Mobile} from "./mobile";
export class BasicPhone extends Mobile{
    MobileType:string
    constructor(mobileId:number,
        mobileName:string,
        mobileCost:number,MobileType:string)
        {
            super(mobileId,mobileName,mobileCost);
            this.MobileType=MobileType;
        }
        display()
        {
            super.display();
            console.log("MobileType:"+this.MobileType);
        }
}