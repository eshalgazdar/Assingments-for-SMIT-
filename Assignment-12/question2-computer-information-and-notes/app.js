const os = require("os");
const path = require("path");
const fs = require("fs");

console.log("Computer Information");
console.log(`Operating system platform: ${os.platform()}`);
console.log(`CPU architecture: ${os.arch()}`);
console.log(`Total memory: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Free memory: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Home directory: ${os.homedir()}`);

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
}

const notesPath = path.join(dataFolder, "student-notes.txt");

console.log(`File name: ${path.basename(notesPath)}`);
console.log(`File extension: ${path.extname(notesPath)}`);

const firstNotes = [
    "I learned that Node.js runs JavaScript outside the browser.",
    "I learned how to use core modules such as os, path, and fs.",
    "I learned how to create, read, append, and rename files."
].join("\n");

fs.writeFileSync(notesPath, firstNotes + "\n", "utf8");

console.log("\nOriginal notes:");
console.log(fs.readFileSync(notesPath, "utf8"));

fs.appendFileSync(notesPath, "I also learned how to organize file paths with the path module.\n", "utf8");

console.log("Updated notes:");
console.log(fs.readFileSync(notesPath, "utf8"));

const renamedPath = path.join(dataFolder, "class-notes.txt");
fs.renameSync(notesPath, renamedPath);
console.log(`Renamed file to: ${path.basename(renamedPath)}`);

const temporaryPath = path.join(dataFolder, "temporary.txt");
fs.writeFileSync(temporaryPath, "This temporary file will be removed.\n", "utf8");
fs.unlinkSync(temporaryPath);
console.log("Temporary file created and removed.");
