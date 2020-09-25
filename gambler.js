const STAKE = 100;
const BET =1;
const UPPER_LIMIT = STAKE + (STAKE * 50 /100)
const LOWER_LIMIT = STAKE - (STAKE * 50 /100)
const TOTAL_DAYS = 20;

var cash=0
var winningCash=0
var totalAmount=0
var dictionary={}

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
        console.log("Total  winning amount of 20 days:"+totalAmount)
    }
    else
    {
        console.log("Total  loosing amount of 20 days:"+totalAmount)
    }
}
monthlyGambling()