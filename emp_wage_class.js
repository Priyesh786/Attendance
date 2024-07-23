class emp {
    constructor(){
        
    }

    static emp_monthly_wage() {
        let monthly_wage = 0;
        for(let i=0; i<20; ++i) {
            let attendance = Math.round(Math.random());

            if(attendance == 0) {
                continue;
            }

            let working_hours = Math.floor((Math.random()*8)+1);
            let part_time_hours = Math.floor((Math.random()*4)+1);

            monthly_wage += (working_hours+part_time_hours)*20;
        }
        return monthly_wage;
    }
    
}

const wage1 = emp.emp_monthly_wage();
console.log(`Employee1 wage is ${wage1}`);

const wage2 = emp.emp_monthly_wage();
console.log(`Employee2 wage is ${wage2}`);

