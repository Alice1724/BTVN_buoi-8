//Bai 1
// if else
let a = parseInt(prompt('Nhập số thứ nhất:'));
let b = prompt('Nhập phép tính(+, -, * hoặc /)');
let c = parseInt(prompt('Nhập số thứ hai:'));

let result = 0;
if (b == "+") {
    result = a + c;
}
else if (b == "-") {
    result = a - c;
}
else if (b == "*") {
    result = a * c;
}
else if (b == "/") {
    result = a / c;
}
else {
    console.log('Nhập lại phép tính')
}
console.log(result)

//switch
let d = parseInt(prompt('Nhập số thứ nhất:'));
let e = prompt('Nhập phép tính(+, -, * hoặc /)');
let f = parseInt(prompt('Nhập số thứ hai:'));
let result2 = 0;
switch (e) {
    case "+":
        result2 = d + f;
        break;
    case "-":
        result2 = d - f;
        break;
    case "*":
        result2 = d * f;
        break;
    case "/":
        result2 = d / f;
        break;
}
console.log(result2);

//Bai 2
let x = parseInt(prompt('Nhập số bất kì:'));
let test = true;
if (x <= 1) {
    console.log(`${x} không phải là số nguyên tố`)
}
if (x == 2) {
    console.log(`${x} là số nguyên tố`)
}
if (x > 2) {
    
    for (var i = 2; i < x; i++) {
        if (x % i == 0) {
           test = false;
        }
    }

    if (test == true) {
        console.log(`${x} là số nguyên tố`)
    }
    else { console.log(`${x} không phải là số nguyên tố`) }
}


