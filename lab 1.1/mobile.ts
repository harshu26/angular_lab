export class Mobile{
    mobileId:number;
    mobileName:string;
    mobileCost:number;
    constructor(mobileId:number,
        mobileName:string,
        mobileCost:number)
        {
            this.mobileId=mobileId;
            this.mobileName=mobileName;
            this.mobileCost=mobileCost;
        }

        //used to display mobile details.
        display()
        {
            console.log("Details of mobile are:"+"MobileId: "+this.mobileId+" "+"MobileName: "+this.mobileName+" "+"MobileCost: "+this.mobileCost);
        }


}

