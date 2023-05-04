"use strict";
// normal Function
function add(num1, num2) {
    return num1 + num2 - 2;
}
let sum = add(5, 8);
// arrow function
const addArrow = (num1, num2) => num1 + num2 - 2;
// example of this type for using in object 
const amrComputerLagbe = {
    name: "DELL",
    price: 1000000,
    extraElement: "Mouse",
    others: " JANI NA KI LAGBE",
    isNedd: true,
    cpu: "intel",
    cpuPrice: 25000
};
// Null , Uknnown , Never types
// null -->  user can assign null to any of the data types like string, number, etc.
const findMe = (valu) => {
    if (valu === null) {
        console.log("paici re mamur betare");
    }
};
findMe(null);
// unknown --> suppose 1 taka = 80 dollar
const taka2Dollar = (taka) => {
    if (typeof taka === 'number') {
        let dollar = taka * 80;
        console.log(dollar);
    }
    if (typeof taka === "string") {
        let [amount, text] = taka.split(' ');
        let dollar = parseFloat(amount) * 80;
        console.log(dollar);
    }
    else {
        console.log('This type of data does not exist with us');
    }
};
//  never --> kon kicu return kore na 
const showEror = (message) => {
    throw new Error(message);
};
// showEror("asle janar ecca error dey ki na")
taka2Dollar(20);
taka2Dollar('20 taka');
taka2Dollar(true);
console.log(`sotti bolte ${amrComputerLagbe.others} kom dame`);
// ----------------------------------------------
// -----------KINDS OF OPERATORS------------
// Ternary Operator 
const future = true;
let isfuture = future ? "Keep on Your process" : "Be concious about you";
let isfuture1 = future ? 100 : 30;
console.log(isfuture, isfuture1);
// Nulish Coeslancing Operator --> When Any value will be 'null' or 'udefined' then the nulish coeslancing Operatoe will be work  
const isVarsityOpen = null;
let aboutVarsity = isVarsityOpen !== null && isVarsityOpen !== void 0 ? isVarsityOpen : 'Varsity is closed now';
console.log(aboutVarsity);
