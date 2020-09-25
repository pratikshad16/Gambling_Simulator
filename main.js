class Main {
    main(){
        console.log("Welcome to Gambling Simulation Program");
        const data=require('./Gambler')
        console.log(data.playNextMonth());
    }
}
const obj = new Main();
obj.main();