/*let str = "Sumit";
console.log(str[str.length-2]);

const celsius = 10;
let fahranheit = celsius*1.8+32;
console.log(fahranheit + " fah");


//--------conditional---------

let cash = 45;
let price = 40;

if(cash>price){
    console.log(`You paid extra ${5}`);
}else if(cash === price){
    console.log("you paid exact amount");
}else{
    console.log("not enough money");
}

//------ternary opretar----------
let weather = NaN;

weather ? console.log("weather is cold") : console.log("weatger is hot");

let subscribe = true
let loggedin = false

console.log(subscribe && loggedin ? "show video" :"hide video");

let cash = 50;
let price = 40;
let isstoreOpen = false;

let str = (cash>price) && isstoreOpen ? "give receipt" : "do not give receipt";
console.log(str);




//-----------------Loops----------------------------
let count = 1;

while(count <= 3){
    console.log(count);
    count++;
}

for(let i = 1;i<=10;i++){
    console.log(i);
}



for(let i = 1;i<=20;i++){
    if(i%3 === 0 && i%5 === 0){
        console.log("Frontend simplified");
    }
    else if(i%3 === 0){
        console.log("Frontend");
    }
    else if(i%5 === 0){
        console.log("simplified");
    }else{
        console.log(i);
    }
}

let Iname = "Frontend Simplified";


for(let i =0;i<Iname.length;i++){
    console.log(Iname[i]);
}

//-------------------FUNCTION--------------------------------------------
function convertCeltofahrebheit(celsius){
    let fahranheit = celsius*1.8 + 32;
    return fahranheit;
}

let str = convertCeltofahrebheit(0);
let str1 = convertCeltofahrebheit(10);
let str2 = convertCeltofahrebheit(30);

function print(str){
 console.log(str);
}
print(str1);


//----------------ARRAY------------------------------------------------------
let arr = [20,30,40,50,100];

let newArray = arr.filter((element) => element<50);
let newArray = arr.filter((element) => {
    console.log(element);
    if(element < 50){
        return true;
    }
   
});

console.log(newArray);


let grade =['A+','A',"FAIL","sumit"];

let newgrade = [];
for(let i = 0;i<grade.length;i++){
    if(grade[i] != "FAIL"){
        newgrade.push(grade[i]);
    }
}

let newgrade = grade.filter(Element => Element !== "FAIL")
console.log(newgrade);

let arr = [1,4,9,16];

let newArray = arr.map(element => "Dog")
console.log(newArray);

let dollars = [1,5,10,3,40];

let cents = [];

for(let i = 0;i<dollars.length;i++){
    cents.push(dollars[i]*100);
}

let cents = dollars.map(dollar => dollar*100)
console.log(cents); */


//------------------OBJECT---------------------------------------------
/*let user = [{
    username: "Riya",
    emial:"sumit@gmail.com",
    lessensComplete: [0,1]
},
{username: "sumit",
    emial:"sumit@gmail.com",
    lessensComplete: [0,1,2]
}
];

console.log(user[0].username);
console.log(user[1].lessensComplete.map(element => element*2));
let user = [];
function register(User){

    user.push(User);
}

register({
    username:"kumar",
    email:"sumit@.com",
    password:1234
})
register({
    username:"kumar",
    email:"sumit@.com",
    password:1234
})
register({
    username:"kumar",
    email:"sumit@.com",
    password:1234
})
console.log(user);
*/

//---------------DOM--------------------------------------------
document.querySelector("#title").innerHTML = "FRontEnd";
document.querySelector(".title").style.fontSize = "40px";
document.querySelector(".title").style.color = "red";

function changeColor(){
    document.querySelector("#title").style.color = "blue";
}

function toggleColor(){
    document.querySelector("body").classList.toggle("black-theme");
}