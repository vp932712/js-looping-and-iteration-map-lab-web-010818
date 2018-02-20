// Code your solution in this file.
function lowerCaseDrivers(arr){
  return  arr.map(function(word) {return word.toLowerCase()});
}


function nameToAttributes (arr) {
  return arr.map(function (driver) {
    var first_name = driver.split(' ')[0];
    var last_name = driver.split(' ')[1];

    return { firstName: first_name, lastName: last_name };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
}
