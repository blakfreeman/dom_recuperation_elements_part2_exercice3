//1
let div = document.querySelector('#content');

console.log(div);
//2
let divId = document.querySelectorAll("#content");

console.log(divId);


//3

let li = document.querySelector("li.important");

console.log(li);

//4

let liClass = document.querySelectorAll('li.important');

console.log(liClass);

//5

// // // let liTolastUpercast = Array.from(document.querySelectorAll("li"));

// // // liTolastUpercast.forEach(e => {
// // //     x = e.length;
// // //     console.log(e.innerText.charAt(x).toLocaleUpperCase());
// // // })

//6

let p = document.getElementById("content").getElementsByClassName("grandParagraphe");

console.log(p);