/**
 * constants
 */
const STAKE = 100
const BET = 1
const UPPER_LIMIT = STAKE + (STAKE * 50 / 100)
const LOWER_LIMIT = STAKE - (STAKE * 50 / 100)
const turnOverForDay = 50;

/**
 * variables
 */
let cash = 0

class Gambler {
    /**
     * Function to calculate daily gambling
     */
    dailyGambling() {
        cash = 100
        while (cash != LOWER_LIMIT && cash != UPPER_LIMIT) {
            let randomValue = Math.random() * 2
            if (randomValue < 1) {
                cash = cash - BET
            }
            else {
                cash = cash + BET
            }
        }
        return cash;
    }
    /**
         * Function to calculate monthly gambling
         */
    monthlyGambling = (days) => {
        do {
            var array = new Array(days);
            var win = 0;
            var loose = 0;
            let totalAmount = 0;
            let day = 1;
            while (day <= days) {
                let cash = this.dailyGambling()
                if (cash == 150) {
                    console.log("Day: " + day + " || " + "Gambler won Rs.50")
                    win = win + 50;
                    totalAmount = totalAmount + turnOverForDay;
                    array[day - 1] = totalAmount;
                }
                else {
                    console.log("Day: " + day + " || " + "Gambler lost Rs.50")
                    loose = loose + 50;
                    totalAmount = totalAmount - turnOverForDay;
                    array[day - 1] = totalAmount;
                }
                day++;
            }
            if (win > loose) {
                console.log("============================")
                console.log("Total Win is :" + (win - loose))
                console.log("============================")
            } else {
                console.log("============================")
                console.log("Total loss is :" + (loose - win))
                console.log("============================")
            }
            console.log("One month data")
            console.log("=====================================================================================================================")
            console.log(array.toString())
            console.log("=====================================================================================================================")
        } while (win > loose)
        return array;
    }
    luckyUnluckyDay = (days) => {
        let array = this.monthlyGambling(days)
        let max = array[0];
        let min = array[0];
        let luckiestDay = 1;
        let unluckiestDay = 1;
        for (let i = 1; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i]
                luckiestDay = i + 1;
            }
            if (min > array[i]) {
                min = array[i]
                unluckiestDay = i + 1;
            }
        }
        console.log("Luckiest Day:  " + luckiestDay + " At Luckiest day gambler was at " + max + " rupees")
        console.log("Unluckiest Day: " + unluckiestDay + " At Unluckiest day gambler was at " + min + " rupees")
        console.log("---------------------------------------------------------------------------------------------------------------------")
    }
}
module.exports = new Gambler()