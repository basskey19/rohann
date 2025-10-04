function calculate(a, b, callback) {
    return callback(a, b)
}
function add(a,b) {
    console.log(a + b)
}
calculate(10, 20, add)