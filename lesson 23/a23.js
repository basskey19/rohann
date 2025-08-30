if(true){
    var a = 10 //declaration
    var a = 10 //declaration
    var a = 15 //reassiagnment
    console.log("Var Inside The Block:",a)
}
console.log("Var OUtside The block")

if(true){
    let b = 10
    //let b = 10// redeclaration is not allowed
    b= 12
     console.log("Let Inside The Block:",b)
}
//console.log("Let Inside The Block:",b)//err bcas let is block scoped

if(true){
    const c = 10

     console.log("Const Inside The Block:",c)
}
// console.log("Const Inside The Block:",c)//err bcaz const is block scoped