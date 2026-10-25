function registerStudent(studentName, seatAvailable) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (seatAvailable) {
                resolve("Success: " + studentName + ", your registration is confirmed.");
            } else {
                reject("Error: Registration failed for " + studentName + ". Class is full.");
            }
        }, 1000);
    });
}

registerStudent("Alice", true)
    .then((message) => {
        console.log(message);
        return registerStudent("Hania", false);
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
        return registerStudent("Ali", true);
    })
    .then((message) => {
        if (message) {
            console.log(message);
        }
    })
    .catch((error) => {
        console.log(error);
    });

