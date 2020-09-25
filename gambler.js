const STAKE = 100;
const BET =1;
const UPPER_LIMIT = STAKE + (STAKE * 50 /100)
const LOWER_LIMIT = STAKE - (STAKE * 50 /100)

cash = STAKE;
var randomValue= Math.random()
function gambleChecker()
{
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
}
gambleChecker()