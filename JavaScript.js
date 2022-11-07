// const arr = [];
// const arr1 = [1, 2, 3, 4, "salut", "tri", true];
// console.log(arr);
// console.log(arr1.length);
// const user = prompt("cum te numesti")
// const user1 = prompt("citi ani ai")

// const userArray = []
// const userArray1 = ["chalupa"]

// userArray.push(userArray1)
// userArray.push(user)
// userArray.push(user1)
// console.log(userArray);
// let obj = {
//     name:"Chalupa",
//     age:"78",
//     gen:"M",
// }

// console.log(obj.name, obj.age);
// console.log(obj);

// let obj_1 = {
//     name:"Lox",
//     age:"69",
//     gen:"F",
//     NameChild:{
//         name:"Ben",
//         age:"5",
//         gen:"M",
//     }
// }
// console.log(typeof obj_1.NameChild.age);

// const user = [
//     {name:"Alex"},
//     {name:"Ion"},
// ]

// user.forEach(el => {
//     console.log(el.name);
// })

const array = [
    "lupa",
    "pupa",
    "ronalda",
    "pepsi",
    "egorka"
];
array.forEach(el => {

    // console.log(el.includes("egor"));

if (el.includes("egor")) {
    console.log(el);
}else{
    console.log("netu")
}
})



const tag_h1 = document.querySelector(".title")
tag_h1.innerHTML = "Salut";
tag_h1.style.color = "red";
console.log(tag_h1);

const boty_color = document.querySelector("body")

// function color() {
//     addEventListener("click", ()=> {
//         boty_color.style.backgroundColor = "blue":
//     })
// }
// color(tag_h1)

const paragraf = document.createElement('p')
paragraf.innerHTML = "1992"
paragraf.className = "age"
boty_color.appendChild(paragraf)