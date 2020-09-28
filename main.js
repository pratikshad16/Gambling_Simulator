class Main {
    main() {
        console.log("Welcome to Gambling Simulation Program");
        const data = require('./Gambler')
        data.luckyUnluckyDay(30);
    }
}
const obj = new Main();
obj.main();