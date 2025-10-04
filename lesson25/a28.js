const student1 = {
Name:"67kid",
Age:7,
};

const studentJSON=JSON.stringify(student1)
console.log("JSON format:",studentJSON);

const studentObj=JSON.parse(studentJSON)
console.log("javascript object:",studentObj)