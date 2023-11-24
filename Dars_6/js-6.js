// let chooseBtn = document.getElementById("chooseBtn");
// console.log(chooseBtn);
// let reciveBtn = document.getElementById("reciveBtn");
// console.log(reciveBtn);

let chooseBtn = document.getElementById("chooseBtn"),
    reciveBtn = document.getElementById("reciveBtn"),
    InPuT_input = document.getElementsByClassName("InPuT_input")[0],
    H__2_Text = document.getElementsByTagName("h2")[0],
    DIV__00 = document.querySelector(".DIV_00"),
    P__P__P = document.querySelectorAll('p'),
    Uz_Motrs = document.getElementsByName("Uz_Motrs")[0]
// console.log(P__P__P[0]);

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \\
// 1-Ko'rinishi
// function hover(){
//     H__2_Text.textContent = 'tugadi'
// }

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \\
// 2-Ko'rinishi
// function hover(){
//     H__2_Text.textContent = 'tugadi'
// }
// H__2_Text.onmouseenter = hover;

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \\
// 3-Ko'rinishi
// H__2_Text.addEventListener("mouseenter",function(){
//         H__2_Text.textContent = 'Tugadi'
// })
// H__2_Text.addEventListener("mouseleave",function(){
//     H__2_Text.textContent = 'Boshlandi'
// })

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \\
// 4-Ko'rinishi
// function hover() {
//     H__2_Text.textContent = 'tugadi'
// }
// H__2_Text.addEventListener("mouseenter",hover)
// H__2_Text.addEventListener("mouseleave",function(){
//     H__2_Text.textContent = 'Boshlandi'
// })

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \\
chooseBtn.addEventListener('click',function (){
    H__2_Text.style.display = 'block'
})
reciveBtn.addEventListener('click',function (){
    H__2_Text.style.display = 'none'
})
InPuT_input.addEventListener("input",function(){
    Uz_Motrs.value = `Mening Ismim ${InPuT_input.value}`
})