const STACK = 100;
const BET =1;

cash = STACK;
var randomValue= Math.random()
function gambleChecker()
{
    if (randomValue<0.5) 
    {
		console.log("Gambler win")
        cash=cash+BET
        console.log(cash);
    }
    else 
    {
		console.log("Gambler Lose")
        cash=cash-BET
        console.log(cash);
    }
}
gambleChecker()