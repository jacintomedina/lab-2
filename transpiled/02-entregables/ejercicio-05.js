console.log("************** SLOT MACHINE *********************");
class SlotMachine {
    coins;
    totalCoins;
    constructor() {
        this.coins = 0;
        this.totalCoins = 0;
    }
    play() {
        this.coins += 10;
        const result1 = Math.random() >= 0.5;
        const result2 = Math.random() >= 0.5;
        const result3 = Math.random() >= 0.5;
        if (result1 && result2 && result3) {
            this.totalCoins += this.coins;
            console.log(`Congratulations!!! You won ${this.coins} coins!!`);
            console.log(`Total coins won ${this.totalCoins}`);
            this.coins = 0;
        }
        else {
            console.log("Good luck next time!!");
        }
    }
}
const machine1 = new SlotMachine();
machine1.play();
export {};
