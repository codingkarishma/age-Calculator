let btn=document.querySelector("#btn");
let input=document.querySelector("#date");
input.max=new Date().toISOString().split("T")[0];
console.log(input.max);
console.log(btn,input);

let res=document.querySelector(".res");
console.log(res);

let howManyYears,howManyDays,howmanyMonths;

btn.addEventListener("click",(e)=>{
    calculateAge();
});
// console.log(new Date());

// let day1=new Date().getDate();
// let month1=new Date().getMonth();
// let year1=new Date().getFullYear();

// console.log(day1);
// console.log(month1);
// console.log(year1);
function calculateAge(){
    let birthdate=new Date(input.value);

    let day1=parseInt(birthdate.getDate(),10);
    let month1=parseInt(birthdate.getMonth()+1,10);
    let year1=parseInt(birthdate.getFullYear(),10);

    let today=new Date();

    let day2=parseInt(today.getDate(),10);
    let month2=parseInt(today.getMonth()+1,10);
    let year2=parseInt(today.getFullYear(),10);

  if(month2<month1 || month2===month1 && day2<day1 ){
    howManyYears=(year2-year1-1);
     howmanyMonths=12-(month1-month2);
     if(day2<day1){
      howManyYears--;
      howManyDays=new Date(year2,month2,0).getDate()-day1+day2;
     }else{
      howManyDays=Math.abs(day2-day1);
     }
     
  }else{
    howManyYears=year2-year1;
    howmanyMonths=(month2-month1);
     if(day2<day1){
      howManyYears--;
      howManyDays=new Date(year2,month2,0).getDate()-day1+day2;
     }else{
      howManyDays=Math.abs(day2-day1);
     }
  }
  console.log(howManyDays,howmanyMonths,howmanyMonths);

  res.innerHTML =`<h1>You are ${howManyYears}years ${howmanyMonths}months and ${howManyDays}days old</h1>`;
  return res;
   
}