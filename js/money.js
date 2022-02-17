
//get input feild value 

function getinputvalue(inputid){
    const inputfeild=document.getElementById(inputid);
             const inputamounttext=inputfeild.value; //value ta nilam
             const inputamount=parseFloat(inputamounttext);
            // inputfeild.value= ''; 
             return inputamount;
}
//update total expense and total balance.
function expenseandbalanceupdate(incomeamount,expensefood,expenserent,expensecloth,inputtotal,isadd){
    const totalelement=document.getElementById(inputtotal);
   
    if(isadd==true){
        totaltext=totalelement.innerText;
       
        const previoustotal=parseFloat(totaltext);
        const newamount=previoustotal+expensefood+expenserent+expensecloth;
        totalelement.innerText=newamount;
    }
  
   
  
    else{
        const totalexpense=expensefood+expenserent+expensecloth;
        const balance =incomeamount-totalexpense;
        totaltext=totalelement.innerText;
        
        const previoustotal=parseFloat(totaltext);
        const newamount=previoustotal+balance;
        totalelement.innerText=newamount;
    }
}
//update saving amount 

function saveamount(incomeamount,saving){
    const save=document.getElementById('save-amount');
    

     const savingbalance=(incomeamount*saving)/100;

       const totaltext=save.innerText;
        
         const previoustotal=parseFloat(totaltext);
        const newamount=previoustotal+savingbalance;
        save.innerText=newamount;

        return newamount;

}
//remain balance calculation
function remainbalance(getsaveamount,previousbalance){
    const remain =document.getElementById('remain-balance');
    const balance=previousbalance-getsaveamount;

    const remaintext=remain.innerText;
    const previousremain=parseFloat(remaintext);
    const newremain=previousremain+balance;
    remain.innerText=newremain;
   

}


document.getElementById('calculate-button').addEventListener('click',function(){
  //getinputvalue for income feild
  const incomeamount=getinputvalue('income-amount');
  //getinputvalue for expenses food
  const expensefood=getinputvalue('food-input');
  //getinputvalue for expenses rent
  const expenserent=getinputvalue('rent-input');
  //getinputvalue for expenses cloths
  const expensecloth=getinputvalue('cloth-input');



  //total expense update
  expenseandbalanceupdate(incomeamount,expensefood,expenserent,expensecloth,'total-expense',true);

  expenseandbalanceupdate(incomeamount,expensefood,expenserent,expensecloth,'total-balance',false);
  

});

//handle save button work

document.getElementById('save-button').addEventListener('click',function(){ 
    const incomeamount=getinputvalue('income-amount');
    const saving=getinputvalue('save-feild');
    const getsaveamount=saveamount(incomeamount,saving);
    //remaining balance calculation
    const previousbalance=document.getElementById('total-balance').innerText;
    remainbalance(getsaveamount,previousbalance);
   

});