// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var change = {}; 
       if (currency <=0) {
        return change = {};
    };
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    };
    const xH = Math.floor(currency/50); // кол-во H
    if (xH != 0) {change ["H"] = xH}; // если Н не 0, вносим в ответ
    const xQ = Math.floor((currency-xH*50)/25); // кол-во Q
    if (xQ != 0) {change ["Q"] = xQ};
    const xD = Math.floor((currency-xH*50-xQ*25)/10); // кол-во D
    if (xD != 0) {change ["D"] = xD};
    const xN = Math.floor((currency-xH*50-xQ*25-xD*10)/5); // кол-во N
    if (xN != 0) {change ["N"] = xN};
    const xP = currency-xH*50-xQ*25-xD*10-xN*5; // кол-во P
    if (xP != 0) {change ["P"] = xP};
    return change;
};
