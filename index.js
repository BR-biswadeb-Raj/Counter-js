const number=document.querySelector(".number")
const increase=document.querySelector(".increase")
const decrease=document.querySelector(".decrease")
const reset=document.querySelector(".reset");
var count=0;

increase.addEventListener("click",()=>{
    count++;
    number.innerHTML=count;

});

decrease.addEventListener("click",()=>{
    count--;
    number.innerHTML=count;

})
reset.addEventListener("click",()=>{
    count=0;
    number.innerHTML=count;

})