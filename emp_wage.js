import { attendance_report } from "./attendance.js";

let wage=0;
if(attendance_report == 0) {
    console.log("Your daily wage is 0.")
}
else {
    let hours = Math.floor((Math.random()*8)+1);
    wage = hours*20;

    console.log(`Your daily wage is ${wage}`);
}

export const salary = wage;
