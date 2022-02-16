
//get input feild value 

function getinputvalue(inputid){
    const inputfeild=document.getElementById(inputid);
             const inputamounttext=inputfeild.value; //value ta nilam
             const inputamount=parseFloat(inputamounttext);
             inputfeild.value= ''; 
             return inputamount;
}
function expensetotal(incomeamount,expensefood,expenserent,expensecloth,inputtotal,isadd){
    const totalelement=document.getElementById(inputtotal);
   
    if(isadd==true){
        totaltext=totalelement.innerText;
       
        const previoustotal=parseFloat(totaltext);
        const newamount=previoustotal+expensefood+expenserent+expensecloth;
        totalelement.innerText=newamount;
    }
    //const totalexpense=expensefood+expenserent+expensecloth;
   
  
    else{
        const totalexpense=expensefood+expenserent+expensecloth;
        const balance =incomeamount-totalexpense;
        totaltext=totalelement.innerText;
        
        const previoustotal=parseFloat(totaltext);
        const newamount=previoustotal+balance;
        totalelement.innerText=newamount;
    }
}
//update expense and balance expense


document.getElementById('calculate-button').addEventListener('click',function(){
  //getinputvalue for income feild
  const incomeamount=getinputvalue('income-amount');
  //getinputvalue for expenses food
  const expensefood=getinputvalue('food-input');
  //getinputvalue for expenses rent
  const expenserent=getinputvalue('rent-input');
  //getinputvalue for expenses cloths
  const expensecloth=getinputvalue('cloth-input');

  //expense calculation
  //expensetotal(incomeamount,expensefood,expenserent,expensecloth);

  //total expense update
  expensetotal(incomeamount,expensefood,expenserent,expensecloth,'total-expense',true);

  expensetotal(incomeamount,expensefood,expenserent,expensecloth,'total-balance',false);
  

});