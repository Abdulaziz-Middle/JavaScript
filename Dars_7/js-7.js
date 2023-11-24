// function Abdulaziz(){
//     console.log(this);
// }
// object ichidagi context this nimaga teng desa ?
// object ichidagi this objectni o'ziga teng.
// const person = {
//     name:"Abdulaziz",
//     age: 15,
//     job:"middle developer",
//     callContext: Abdulaziz,
//     // callContext: function(){
//     //     console.log(this);
//     // },
//     // callAnotherContext: Abdulaziz.bind(window),
//     callAnotherContext: Abdulaziz.bind(this),
//     callInfoJob: function (number){
//         // console.log(`Name is ${person.name}`);
//         // console.log(`Age is ${person.age}`);
//         // console.log(`Job is ${person.job}`);
//         console.group(`${this.name} info:`);
//         console.log(`Name is ${this.name}`);
//         console.log(`Job is ${person.age}`);
//         console.log(`Job is ${this.job}`);
//         console.log(`Contact is ${number}`);
//         console.groupEnd();
//     }
// }

// const frontendDev = {
//     name:"Azizbek",
//     age:14,
//     job:"Developer-Middle"
// }

// person.callInfoJob.bind(frontendDev);

// 1-Ko'rinishi
// person.callInfoJob.bind(frontendDev)("+998 91 280 05 62");

// 2-Ko'rinishi
// const Full_Info = person.callInfoJob.bind(frontendDev);
// Full_Info("+998 91 280 05 62");

// 3-Ko'rinishi
// const Full_Info = person.callInfoJob.bind(frontendDev,"+998 91 280 05 62")(); // bind esa function chaqirishimiz kerak bo'ladi

// Call = Apply

// const Full_Info = person.callInfoJob.apply(frontendDev,["+998 91 280 05 62"]); // Appleda parametrdan keyin massiv bor ekan
// const Full_Info = person.callInfoJob.call(frontendDev,"+998 91 280 05 62");  // Callda esa parametrdan keyin massiv yoq ekan

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \\


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \\

//  pastdagi yozilgan narsa massivdagi har birini ko'paytirib beradi 2 ga 10  bo'lsa 20 qilib

// 1-Ko'rinishi
// const array = [10,20,30,40,50,60,70,80,90,100];

// function arrKopaytirishFuntion (arr,num){
//     return arr.map(function (i){
//         return i * num
//     })
// }
// console.log(arrKopaytirishFuntion(array,10));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \\

// 2-Ko'rinishi
// const array = [10,20,30,40,50,60,70,80,90,100];

// Array.prototype.logger = function(number){
//     return this.map(function (i){
//         return i * number
//     })
// }
// console.log(array.logger(4));