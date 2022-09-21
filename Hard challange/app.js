/*function showRating(rating){
    let ratings = ""
    for (let i = 0; i < Math.floor(rating); i++) {
        ratings = ratings + "*"
        if(i !== Math.floor(rating)-1){
            ratings = ratings + " "
        }    
    }
    if(!Number.isInteger(rating)){
        ratings += " ."
    }
    return ratings;
}

console.log(showRating(.5));

function sort(arr){
    // return arr.sort((a,b) => a-b);
    return arr.sort((a,b) => b-a);
}
console.log(sort([1,5,3,8,0]));

function sortLowtoHigh(arr){
    return arr.sort((a,b) => -a.price+b.price );
   
}
console.log(sortLowtoHigh([
    {id: 1,price: 50},
    {id: 2,price: 0},
    {id: 3,price: 500}
]));

async function postByuser(userId){

   const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
   const result = await promise.json();

   const Idresult = result.filter(element => element.userId === userId )
   console.log(Idresult.title);






    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(res => {
    //     console.log(res)
    //     console.log(userId);
    // })
}



postByuser(4);*/

async function firtsSixIncomplete(){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await promise.json();
    const post = result.filter(Element => (Element.completed === false));
    console.log(post.slice(0,6));
}

firtsSixIncomplete();