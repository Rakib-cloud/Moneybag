
//get input feild value 

function getinputvalue(inputid){
    const inputfeild=document.getElementById(inputid);
             const inputamounttext=inputfeild.value; 
             //error case 1:when user press string it will show error
           if(isNaN(inputamounttext)){
                alert("Please enter a value not string ");
              }
             const inputamount=parseFloat(inputamounttext);
            
            //error case 2: when input feild value is negative 
            if(inputamount<=0){
                alert("Please enter positive value");
            }
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
  
  //error 2: if expense >income than error show
  const failmessage=document.getElementById('notify-error');
  const totalexpenseamount=document.getElementById('total-expense').innerText;
  if(totalexpenseamount>incomeamount){
    failmessage.style.display='block';
  }

});

//handle save button work

document.getElementById('save-button').addEventListener('click',function(){ 
    const incomeamount=getinputvalue('income-amount');
    const saving=getinputvalue('save-feild');
    const getsaveamount=saveamount(incomeamount,saving);
    //remaining balance calculation
    const previousbalance=document.getElementById('total-balance').innerText;
    remainbalance(getsaveamount,previousbalance);

    //bonus error:1.. if saving amount is greater than balance amount
    const failmessage=document.getElementById('notify-fail')
    if(getsaveamount>previousbalance){
        failmessage.style.display='block';
    }
   

});