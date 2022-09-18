//------------------Falsy or Truthy----------------------

/*function checkvalue(Fal,Tru){
    return !Fal ? Fal : Tru;
}

console.log(checkvalue(34,500));

// function Length(arr){
//     return arr.length;
// }

function lastelement(arr){
    return arr[(arr.length)-1];
}

console.log(lastelement(arr));


function sum(arr){
    let sumofarray = 0;
    for(let i = 0;i<arr.length;i++){
        console.log(arr[i]);
        sumofarray += arr[i];
        console.log(sumofarray);
    }
    return sumofarray;
}
let arr = [2,2,2];

console.log(sum(arr));

function Addnumber(n){
    let res = 0;
    for(let i = 1;i<=n;i++){
        res = res+i;
    }
    return res;
}

console.log(Addnumber(600));


function CalculateTime(time){
    let timeminute = Math.floor(time/60);
    let timeseconde = time%60;

    if(timeminute.toString().length === 1){
        timeminute = "0" + timeminute;
    }

    return timeminute + ":" + timeseconde;
}

console.log(CalculateTime(300));

function LargestNum(arr){
    let max = arr[0];
  for(let i = 1;i<arr.length;i++){
    if(arr[i] > max){
        max = arr[i];
    }
  }
  return max;
}
let arr = [1,100,-200];
console.log(LargestNum(arr));

function Reverse(str){
//   let reverseSring = "";
//   for (let i = 0; i < str.length; i++) {
//    reverseSring = str[i] + reverseSring;
//   }
//   return reverseSring;
return str.split("").reverse().join("");
}

console.log(Reverse("abc kumar"));

function TurnElemZero(array){

    return array.map(Element => Element=0)

    /*return new Array(array.length).fill(0);
    for (let i = 0; i < array.length; i++) {
        arr[i] = 0;
    }
    return array;
}

let arr = [5,100,0,3,5,6,8];
console.log(TurnElemZero(arr));*/

function Filterapple(fruits){

    let arr = [];
    for (let i = 0; i < fruits.length; i++) {
        if(fruits[i] != "Apple"){
            arr.push(fruits[i]);
        } 
    }
    return arr;
    // return fruits.filter(element => element != "Apple")

}

console.log(Filterapple(["Banana","Orange","Apple"]));