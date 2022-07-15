function moneyBox1 (coins) {
    let saveCoins1 = 0;
    saveCoins1 += coins;
    console.log (`MoneyBox1: $${saveCoins1}`);
}

moneyBox1 (5);
moneyBox1 (5);


function moneyBox () {
    let saveCoins = 0;

    function countCoins (coins) {
        saveCoins += coins;
        console.log (`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox ();
myMoneyBox (5);
myMoneyBox (5);
myMoneyBox (15);

// return:
// MoneyBox: $5
// MoneyBox: $10
// MoneyBox: $25

const moneyBoxAna = moneyBox ();
moneyBoxAna (10);
moneyBoxAna (20);
moneyBoxAna (15);

// return:
// MoneyBox: $10
// MoneyBox: $30
// MoneyBox: $45