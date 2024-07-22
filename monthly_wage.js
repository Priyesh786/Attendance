import { attendance_report } from "./attendance.js";
import { salary } from "./emp_wage.js";

if(attendance_report == 0) {
    console.log("Your monthly wage is 0.");
} else {
    console.log(`Your monthly wage is ${20*salary}`);
}