class Gambler {
     constant(){
         const STACK = 100;
         const BET = 1;
    }
     gambleChecker() {
        var stake =100;
        Math.random() > 0.5 ? (stake += 1) : (stake -= 1);
        return stake;
      }
}
module.exports = new Gambler();