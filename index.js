const employee ={
    name: "Michael",
    streetAddress: "100 Tunnel",
}

function updateEmployeeWithKeyAndValue(obj,key,value){
    const employee1 = {...obj};
    employee1[key] = value;
    return employee1;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(obj,key){
    const employee2 = {...obj};
    employee2[key] = undefined;
    return employee2;
}

function destructivelyDeleteFromEmployeeByKey(obj,key,value){
    employee[key] = undefined;
    return employee;
}