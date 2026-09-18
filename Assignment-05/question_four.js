let totalCalled = 0;

for (let rollNumber = 1; rollNumber <= 20; rollNumber++) {

    if (rollNumber === 13) {
        continue;
    }

    if (rollNumber === 18) {
        break;
    }

    console.log("Calling roll number " + rollNumber);
    totalCalled++;
}

console.log("Total number of roll numbers called: " + totalCalled);
