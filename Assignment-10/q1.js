function calculate(num1, num2, callback) {
    const result = num1 + num2;
    callback(result);
}

calculate(10, 15, function(res) {
    console.log("Addition Result:", res);
});

function calculateBill(price1, price2, price3, callback) {
    const total = price1 + price2 + price3;
    callback(total);
}

calculateBill(200, 300, 500, function(totalAmount) {
    console.log("Total Bill:", totalAmount);
});

function withdrawMoney(amount, callback) {
    let balance = 10000;
    setTimeout(function() {
        if (amount <= balance) {
            balance -= amount;
            callback(null, balance);
        } else {
            callback("Insufficient balance", balance);
        }
    }, 2000);
}

withdrawMoney(2500, function(err, remainingBalance) {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Withdrawal successful. Remaining Balance:", remainingBalance);
    }
});