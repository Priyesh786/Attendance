function attendance() {
    let randomnumber = Math.random();
    let attendance_value = Math.round(randomnumber);
    return attendance_value;
}

let attendance_result = attendance();
if(attendance_result==1) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}