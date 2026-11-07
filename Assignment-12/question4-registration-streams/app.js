const EventEmitter = require("events");

const registrationSystem = new EventEmitter();

registrationSystem.on("studentRegistered", (student) => {
    console.log(`Registration confirmed: ${student.name} (ID: ${student.id})`);

    setTimeout(() => {
        console.log(`Reminder: Welcome session for ${student.name} is coming up.`);
    }, 3000);
});

function registerStudent(id, name) {
    registrationSystem.emit("studentRegistered", { id, name });
}

registerStudent(101, "Arsalan");
registerStudent(102, "Eshal");


const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "large.txt");
const outputPath = path.join(__dirname, "copy.txt");

console.log("\nReading large.txt in stream chunks:");

const readStream = fs.createReadStream(inputPath, { encoding: "utf8" });

readStream.on("data", (chunk) => {
    console.log("Received chunk:");
    console.log(chunk);
});

readStream.on("end", () => {
    console.log("Finished reading large.txt.");
});

readStream.on("error", (error) => {
    console.error(`Read error: ${error.message}`);
});

const copyReadStream = fs.createReadStream(inputPath);
const copyWriteStream = fs.createWriteStream(outputPath);

copyReadStream.on("error", (error) => {
    console.error(`Copy read error: ${error.message}`);
});

copyWriteStream.on("error", (error) => {
    console.error(`Copy write error: ${error.message}`);
});

copyWriteStream.on("finish", () => {
    console.log("File copied successfully to copy.txt.");
});

copyReadStream.pipe(copyWriteStream);
