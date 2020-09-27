class Main {
    main(){
        console.log("Welcome to Gambling Simulation Program");
        const data=require('./Gambler')
        data.monthlyGambling(30);
    }
}
const obj = new Main();
obj.main();