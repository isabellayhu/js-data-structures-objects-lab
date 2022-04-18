// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue (driver, key, value){
    let newDriver = {...driver};
    // newDriver = Object.assign(newDriver,{[key]:value});
    newDriver[key] = value;
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey (driver, key){
    let newDriver =  Object.assign({},driver);
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey (driver, key){
    delete driver[key];
    return driver;
}