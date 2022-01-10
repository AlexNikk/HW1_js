console.log(typeof 9); 
console.log(typeof NaN); 
console.log(typeof 'String'); 
console.log(typeof true); 
console.log(typeof {name: 'Sally'}); 
console.log(typeof null); 
console.log(typeof undefined); 

let name="Bob";

if ((typeof name)=="string") {
    console.log("Привет, "+name);
}
else {
    console.log("Ошибка, не тот тип данных");
}

(typeof name)=="string"?console.log("Привет, "+name): console.log("Ошибка, не тот тип данных");

let fDayOff;

let n=6;

if (n==6 || n==7) {
    fDayOff=true;
}
else{
    fDayOff=false;
}

console.log("Выходной:"+fDayOff);