// array.forEach(element => {

// });

// const coding=["js","ruby","java","python"]
// const values = coding.forEach((item)=>{
//     console.log(item);
// })
// +++++++++++++++++++++++++++++++>>>>>>>>>>>>>>>>undefined
// console.log(values);
// foreach does not return the values

// const mynum=[1,2,3,4,5,6,7,8,9]
// let newNums =mynum.filter((num)=> {
//    return num>4
// })

// const newnuumbers =[]
// mynum.forEach((num)=>{
//     if (num>4) {
//         newnuumbers.push(num)

//     }
// })
// console.log(newnuumbers);

const books = [
  { title: "bookOne", genre: "fiction", publish: 1981 },
  { title: "2", genre: "goo", publish: 1981 },
  { title: "3", genre: "rjn", publish: 1956 },
  { title: "4", genre: "fbb", publish: 1971 },
  { title: "6", genre: "mimo", publish: 1941 },
];
const collectdata=books.filter((bookss)=>bookss.publish===1971)
console.table(collectdata);


const nuuu =[1,2,3,4,5,67,78]
const newnuunuuu=nuuu.map((num)=>{return num+4})
console.log(newnuunuuu);
