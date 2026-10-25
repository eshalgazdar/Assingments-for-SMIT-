function prepareOrder(callback) {
    console.log("Preparation started...");
    setTimeout(() => {
        console.log("Preparation finished.");
        callback();
    }, 1000);
}

function packOrder(callback) {
    console.log("Packing started...");
    setTimeout(() => {
        console.log("Packing finished.");
        callback();
    }, 1000);
}

function notifyCustomer(callback) {
    console.log("Notification process started...");
    setTimeout(() => {
        console.log("Customer notified. Order complete!");
        callback();
    }, 1000);
}

console.log("--- Version 1: Nested Callbacks ---");
prepareOrder(() => {
    packOrder(() => {
        notifyCustomer(() => {
            console.log("All steps completed via callbacks.");
            runPromiseWorkflow();
        });
    });
});

function delayStep(message, duration) {
    return new Promise((resolve) => {
        console.log(message + " started...");
        setTimeout(() => {
            console.log(message + " finished.");
            resolve();
        }, duration);
    });
}

async function runPromiseWorkflow() {
    console.log("--- Version 2: Async/Await Workflow ---");
    await delayStep("Preparation", 1000);
    await delayStep("Packing", 1000);
    await delayStep("Notification", 1000);
    console.log("All steps completed via Async/Await.");
}

