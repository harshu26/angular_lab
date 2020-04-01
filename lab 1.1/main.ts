

import{BasicPhone} from "./basicphone";
import{SmartPhone} from "./smartphone";
import{Mobile} from "./mobile";
let basicphone:BasicPhone=new BasicPhone(12,"nokia1100",3500,"keypad");
let  smartphone:SmartPhone=new SmartPhone(30,"realme xt",1600,"touchscreen");
let mobiles:Mobile[]=[];
mobiles.push(basicphone);
mobiles.push(smartphone);
for(let mobile of mobiles)
{
    mobile.display();
}