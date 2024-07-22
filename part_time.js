import { attendance_report } from "./attendance.jsgi";

if(attendance_report == 0) {
    console.log("Your part time wage is 0.")
} else {
    let part_time_hour = Math.floor((Math.random()*4)+1);
    console.log(`Your part time_wage is ${part_time_hour*20}`)
}