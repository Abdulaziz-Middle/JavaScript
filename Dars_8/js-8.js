// function calcFuntion (number){
//     return function (){
//         console.log(100 * number);
//     }
// }
// const calc = calcFuntion(8);
// calc()

// function calcFuntion(number){
//     return function(n){
//         return number * n
//     }
// }
// const mulTen = calcFuntion(10);
// console.log(mulTen(20));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \\

// function calcFuntion(number){
//     return function(n){
//         return number * n
//     }
// }
// const mulTen1 = calcFuntion(10);
// const mulTen2 = calcFuntion(10);
// console.log(mulTen1(10));
// console.log(mulTen1(20));
// console.log(mulTen2(30));
// console.log(mulTen2(40));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \\

// google.com instagram.com youtube.com 
// mail.ru ok.ru yandex.ru

// function ulrGenerator(domain){
//     return function (hosting){
//         return `https://${hosting}.${domain}`
//     }
// }
// const comURL = ulrGenerator('com');
// const ruURL = ulrGenerator('ru');
// console.log(comURL("youtube"));
// console.log(ruURL("yandex"));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \\

// Uyga vazifa

// 1-Ko'rinishi
// function persionInfo() {
//     console.group(`${this.name} info:`);
//     console.log(`Name:${this.name},Age:${this.age},job:${this.job}`);
//     console.groupEnd();
// }
// const Object1 = {
//     name:"Abdulazizbek_1",
//     age: 15,
//     job:"Dasturchi"
// }
// const Object2 = {
//     name:"Abdulazizbek_2",
//     age: 14,
//     job:"Middle"
// }
// persionInfo.bind(Object1)()
// persionInfo.bind(Object2)()

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \\

// 2-Ko'rinishi
// function Bind(context,functionimiz){
//     return function (...arguments){
//         functionimiz.apply(context,arguments)
//     }
// }

// function persionInfo() {
//     console.group(`${this.name} info:`);
//     console.log(`Name:${this.name},Age:${this.age},job:${this.job}`);
//     console.groupEnd();
// }

// const Object1 = {
//     name:"Abdulazizbek_1",
//     age: 15,
//     job:"Dasturchi"
// }
// const Object2 = {
//     name:"Abdulazizbek_2",
//     age: 14,
//     job:"Middle"
// }
 
// Bind(Object1,persionInfo)()
// Bind(Object2,persionInfo)()

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \\

