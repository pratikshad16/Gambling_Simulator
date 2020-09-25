const STAKE = 100;
const BET =1;
const UPPER_LIMIT = STAKE + (STAKE * 50 /100)
const LOWER_LIMIT = STAKE - (STAKE * 50 /100)
const TOTAL_DAYS = 30;

var cash=0
var winningCash=0
var totalAmount=0
var dictionary={}
var lucky_day=0

function dailyGambling()
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
function monthlyGambling()
{
    for(day = 1;day <= TOTAL_DAYS;day++)
    {
        var cash = dailyGambling()
        dictionary[day] = cash
        totalAmount = totalAmount + dictionary[day];
        console.log("Amount of day:"+day +":"+dictionary[day])
    }
    if(totalAmount > 0)
    {
        console.log("Total  winning amount of 30 days:"+totalAmount)
    }
    else
    {
        console.log("Total  loosing amount of 30 days:"+totalAmount)
    }
    sort()
    function sort()
 {
    //Creating array of amount
    var amount = Object.keys(dictionary).map(function(key)
     {
        return [key, dictionary[key]];
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
}
function playNextMonth() 
{
    monthlyGambling()
    if(totalAmount>0)
    {
        console.log("Gambler playing for next month");
    }
    else
    {
        console.log("Stop gambling");
    }
}
playNextMonth()