const STAKE = 100;
const BET =1;
const UPPER_LIMIT = STAKE + (STAKE * 50 /100)
const LOWER_LIMIT = STAKE - (STAKE * 50 /100)
const TOTAL_DAYS = 30;

var cash=0
var winningCash=0
var totalAmount=0
var sumOfAmount={}


class Gambler {

 dailyGambling()
{
    winningCash=0
    cash=STAKE
    while(cash != LOWER_LIMIT && cash != UPPER_LIMIT)
    {
        var randomValue= Math.random()   
        if (randomValue<0.5) 
        {
            cash = cash + BET
        }
        else 
        {
            cash = cash - BET
        }
    }
    winningCash=cash-STAKE
        return winningCash;
}
 monthlyGambling()
{
    for(let day = 1;day <= TOTAL_DAYS;day++)
    {
        var cash = this.dailyGambling()
        sumOfAmount[day] = cash
        totalAmount = totalAmount + sumOfAmount[day];
        console.log("Amount of day:"+day +":"+sumOfAmount[day])
    }
    if(totalAmount > 0)
    {
        console.log("Total  winning amount of 30 days:"+totalAmount)
    }
    else
    {
        console.log("Total  loosing amount of 30 days:"+totalAmount)
    }
    this.sort()
}
    sort()
    {
    //Creating array of amount
    var amount = Object.keys(sumOfAmount).map(function(key)
     {
        return [key, sumOfAmount[key]];
     });

    //Sort the array based on the second element
    amount.sort(function(first, second)
     {
        return second[1] - first[1];
     });

    //Luckiest Day
    console.log("Luckiest Day : ")
    console.log(amount.slice(0,1));

    //Unluckiest Day
    console.log("Unluckiest Day : ")
    console.log(amount.slice(amount.length-2, amount.length-1));
    }   
    playNextMonth() 
    {
        this.monthlyGambling()
        if(totalAmount>0)
        {
            console.log("Your winning amount is high");
            console.log("You can play for next month");
        }
        else
        {
            console.log("Your loosing amount is high");
            console.log("Oops!! You have to stop now");
        }
    }
}
module.exports=  new Gambler()