const data = require('./Gambler')
var readline = require('readline');
class Main {
    main() {
        console.log("Welcome to Gambling Simulation Program");
        var input = readline.createInterface(process.stdin, process.stdout);
        input.question("Enter the number Of days :", (Days) => {
            data.luckyUnluckyDay(Days);
            process.exit();
        })
    }
}
const obj = new Main();
obj.main();