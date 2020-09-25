/**
 * constants
 */
const STAKE = 100
const BET =1
const UPPER_LIMIT = STAKE + (STAKE * 50 /100)
const LOWER_LIMIT = STAKE - (STAKE * 50 /100)
const TOTAL_DAYS = 10

/**
 * variables
 */
var cash=0
var winningCash=0
var totalAmount=0
var sumOfAmount={}


class Gambler {
 dailyGambling()
{
    winningCash=0
    cash=100
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
       return cash;
}
/**
     * Function to calculate monthly gambling
     */
 monthlyGambling()
{
    do {
     var array= new Array(5);
     var win = 0;
     var loose = 0;
     var winningData=0;
     var loosingData=0;
    for(var day = 1;day <= TOTAL_DAYS;day++)
    {
        var cash = this.dailyGambling()
        sumOfAmount[day] = cash
        totalAmount = totalAmount + sumOfAmount[day];
        console.log("Amount of day:"+day +":"+sumOfAmount[day])
    
    if(cash==150)
    {
        console.log("Total  winning amount of 30 days: 50")
          win=win+50;
          winningData=winningData+50;
         array[day-1]=win;
         
    }
    else
    {
        console.log("Total  loosing amount of 30 days: 50")
         loose= loose-50;
         loosingData=loosingData+50;
         array[day-1]=loose; 
    }
    }
    if(winningData>loosingData){
        console.log("Total Win is:"+(winningData-loosingData))
    } else{
        console.log("Total loss is:"+(loosingData-winningData))
    }
    console.log(array.toString())
    var max=array[0];
    var min=array[0];
    var luckiestDay=0;
    var unluckiestDay=0;
    for(var i=0; i<array.length;i++)
    {
        if(max<array[i]){
            max=array[i]
            luckiestDay=i+1;
        }
        if(min>array[i]){
            min=array[i]
            unluckiestDay=i+1;
        }
    }
    console.log("Luckiest Day:  "+luckiestDay+" He was in rupees "+max)
    console.log("Unluckiest Day: "+unluckiestDay+" He was in rupees "+min)
} while (winningData>loosingData) 
}
}
module.exports=  new Gambler()